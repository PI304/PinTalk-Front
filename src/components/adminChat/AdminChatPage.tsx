import React, { useEffect, useState, useRef } from 'react';
import chatApi from '@apis/chat/chatApi';
import { chatRoom, chatMessage, chatId } from '@apis/chat/chatApti.type';
import Image from 'next/image';
import {
  svgDown,
  svgExport,
  svgLoading,
  svgPinOff,
  svgPinOn,
  svgPinTalkEmoGray,
  svgPintalkGray,
  svgSearch,
  svgSearch2,
  svgUp,
  svgX,
} from '@styles/svg';
import useInput from '@hooks/useInput';
import { addDays, format, isSameDay, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import StopChatPopup from './StopChatPopup';
import RestartChatPopup from './RestartChatPopup';
import DeleteChatPopup from './DeleteChatPopup';

const AdminChatPage = () => {
  const { value: inputMessage, onChange: handleInputChange } = useInput();
  const { value: inputSearch, onChange: handleInputSearchChange } = useInput();
  const [chatRooms, setChatRooms] = useState<chatRoom[]>([]);
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [isChatActive, setIsChatActive] = useState(false);
  const [chatId, setChatId] = useState(0);
  const [messages, setMessages] = useState<chatMessage[]>([]);
  const chatSocket = useRef<WebSocket | null>(null);
  const statusSocket = useRef<WebSocket | null>(null);
  const [loadingMoreMessages, setLoadingMoreMessages] = useState(false);
  const [offset, setOffset] = useState(0);
  const [chatRoomGuest, setChatRoomGuest] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [isClosed, setIsClosed] = useState(false);
  const [uuid, setUuid] = useState('');
  const [token, setToken] = useState('');

  const isMessage = inputMessage === '';

  useEffect(() => {
    chatApi.getChatRoomList().then((data) => {
      if (data.results && Array.isArray(data.results)) {
        const updatedChatRooms = data.results.map((chatRoom: chatRoom) => {
          return { ...chatRoom };
        });
        setChatRooms(updatedChatRooms);
        console.log('data:', data);
      } else {
        console.error('Invalid chat rooms data:', data);
      }
    });
  }, [messages]);

  const createWebSocketURI = (roomName: string, token: string | null) => {
    return `wss://api.pintalk.app/ws/chat/${roomName}/?token=${token}`;
  };

  const onClickX = () => {
    if (chatSocket.current) {
      chatSocket.current.close();
    }
    setIsChatActive(false);
    setActiveChat(null);
  };

  const [isStopChatPopupOpen, setIsStopChatPopupOpen] = useState(false);
  const openStopChatPopup = () => {
    setIsStopChatPopupOpen(true);
  };
  const closeStopChatPopup = () => {
    setIsStopChatPopupOpen(false);
  };

  const onClickStopChat = () => {
    if (activeChat === chatId) {
      setIsChatActive(false);
      setActiveChat(null);
      if (chatSocket.current && chatSocket.current.readyState === WebSocket.OPEN) {
        chatSocket.current.send(
          JSON.stringify({
            type: 'notice',
            is_host: true,
            message: 'close',
            datetime: getDatetime(),
          }),
        );
      }
      window.location.reload();
    }
  };
  const [isRestartChatPopupOpen, setIsRestartChatPopupOpen] = useState(false);
  const openRestartChatPopup = () => {
    setIsRestartChatPopupOpen(true);
  };
  const closeRestartChatPopup = () => {
    setIsRestartChatPopupOpen(false);
  };

  const onClickRestartChat = async (id: chatId) => {
    try {
      await chatApi.patchChatRoomRestoreById(id);
      setIsRestartChatPopupOpen(false);
      window.location.reload();
    } catch (e) {}
  };
  const [isDeleteChatPopupOpen, setIsDeleteChatPopupOpen] = useState(false);
  const openDeleteChatPopup = () => {
    setIsDeleteChatPopupOpen(true);
  };
  const closeDeleteChatPopup = () => {
    setIsDeleteChatPopupOpen(false);
  };

  const onClickDeleteChat = async (id: chatId) => {
    try {
      await chatApi.deleteChatRoomById(id);
      setIsDeleteChatPopupOpen(false);
      window.location.reload();
    } catch (e) {}
  };

  const handleChatRoomClick = async (
    chatRoomId: number,
    chatRoomName: string,
    chatRoomGuest: string,
  ) => {
    setOffset(0);
    setChatRoomGuest(chatRoomGuest);
    setMessages([]);
    if (activeChat === chatRoomId) {
      setIsChatActive(false);
      setActiveChat(null);

      if (chatSocket.current) {
        chatSocket.current.close();
        chatSocket.current = null;
      }
      if (statusSocket.current && statusSocket.current.readyState !== WebSocket.CLOSED) {
        statusSocket.current.close();
        statusSocket.current = null;
      }
    } else {
      const data = await chatApi.GetChatRoomMessage({ id: chatRoomId, limit: 20, offset: 0 });
      const data2 = await chatApi.getChatRoomById({ id: chatRoomId });
      setUuid(data2.host.uuid);
      setIsClosed(data2.isClosed);
      setActiveChat(chatRoomId);
      setIsChatActive(true);
      setChatId(chatRoomId);
      // if (data && data.results && Array.isArray(data.results)) {
      //   setMessageCount(data.count);
      //   setMessages(data.results);
      // } else {
      //   console.error('Invalid messages data:', data);
      // }

      if (chatSocket.current) {
        chatSocket.current.close();
      }
      const token = localStorage.getItem('access_token');
      if (token) setToken(token);
      const websocketURI = createWebSocketURI(chatRoomName, token);
      chatSocket.current = new WebSocket(websocketURI);
      chatSocket.current.onopen = () => {
        console.log('chatSocket connected');
      };

      chatSocket.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data);
        if (data.data && Array.isArray(data.data)) {
          setMessages((prevMessages) => [...prevMessages, ...data.data]);
        } else if (data.type === 'chat_message') {
          setMessages((prevMessages) => [...prevMessages, data]);
        }
        setMessageCount(messages.length);
        console.log(messages.length);
      };

      chatSocket.current.onclose = (event) => {
        console.log('chatSocket disconnected');
      };
    }
  };
  useEffect(() => {
    const onlineStatus = JSON.parse(localStorage.getItem('pintalk_online_status') || 'false');

    if (onlineStatus && uuid && token && activeChat) {
      if (statusSocket.current) {
        statusSocket.current.close();
        statusSocket.current = null;
      }

      const statusURI = `wss://api.pintalk.app/ws/status/${uuid}/?token=${token}`;
      statusSocket.current = new WebSocket(statusURI);
      statusSocket.current.onopen = () => {
        console.log('Status socket connected');
      };

      statusSocket.current.onclose = (event) => {
        console.log('Status socket disconnected');
      };
    } else {
      if (statusSocket.current) {
        statusSocket.current.close();
        statusSocket.current = null;
      }
    }
  }, [activeChat]);

  const timeAgo = (dateTime: string): string => {
    const currentTime = new Date();
    const messageTime = new Date(dateTime);
    const diffInSeconds = Math.floor((currentTime.getTime() - messageTime.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays >= 1) {
      return `${diffInDays}일전`;
    } else if (diffInHours >= 1) {
      return `${diffInHours}시간전`;
    } else {
      return `${diffInMinutes}분전`;
    }
  };

  const getDatetime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 9);
    const dateStr = now.toISOString().substring(0, 19);

    return dateStr;
  };
  const sendMessage = (message: string) => {
    if (chatSocket.current && chatSocket.current.readyState === WebSocket.OPEN) {
      chatSocket.current.send(
        JSON.stringify({
          type: 'chat_message',
          is_host: true,
          message: message,
          datetime: getDatetime(),
        }),
      );
    }
  };

  const updateMessages = async () => {
    const data = await chatApi.GetChatRoomMessage({ id: chatId, limit: 20 + offset, offset: 0 });
    if (data && data.results && Array.isArray(data.results)) {
      setMessages(data.results);
    } else {
      console.error('Invalid messages data:', data);
    }
  };
  const handleSendButtonClick = () => {
    if (inputMessage.trim() !== '') {
      if (chatSocket.current && chatSocket.current.readyState === WebSocket.OPEN) {
        chatSocket.current.send(
          JSON.stringify({
            type: 'chat_message',
            is_host: true,
            message: inputMessage,
            datetime: getDatetime(),
          }),
        );
      }
      handleInputChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (!isMessage) {
        handleSendButtonClick();
      }
      e.preventDefault();
    }
  };
  const loadMoreMessages = async () => {
    if (!loadingMoreMessages) {
      setLoadingMoreMessages(true);
      const nextOffset = offset + 20;
      const newData = await chatApi.GetChatRoomMessage({
        id: activeChat as number,
        limit: 20,
        offset: nextOffset,
      });

      if (
        newData &&
        newData.results &&
        Array.isArray(newData.results) &&
        newData.results.length > 0
      ) {
        setMessages((prevMessages) => [...prevMessages, ...newData.results]);
        setOffset(nextOffset);
      }
      setLoadingMoreMessages(false);
    }
  };
  const isNewDay = (prevDate: string, currentDate: string): boolean => {
    const prev = parseISO(prevDate);
    const current = parseISO(currentDate);
    return !isSameDay(prev, current);
  };

  const renderTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const renderMessage = (message: chatMessage, index: number) => {
    const isCurrentResult =
      currentResultIndex !== -1 && index === searchResults[currentResultIndex];
    const position = message.is_host ? 'text-right' : 'text-left';
    const messageClass = message.is_host
      ? isCurrentResult
        ? 'bg-yellow-300 rounded-bl-xl  text-white'
        : 'bg-gradient-to-r from-blue-main to-gradi-3 rounded-bl-xl  text-white'
      : 'bg-white border-[1px] rounded-br-xl shadow-message';

    const parsedDate = parseISO(message.datetime);
    const formattedTime = format(parsedDate, 'a h:mm');
    const timePosition = message.is_host ? 'ml-2' : 'mr-2';

    const showDate = index !== 0 && isNewDay(messages[index - 1].datetime, message.datetime);

    const messageHighlightClass = isCurrentResult ? 'bg-yellow-300' : '';

    return (
      <React.Fragment key={index}>
        {showDate && (
          <div className='flex justify-center text-14'>
            <div className='text-center text-text-3 border-border border-[1px] rounded-[40px] w-[70px] h-[30px] flex items-center justify-center'>
              {format(addDays(parsedDate, 1), 'M/d eee', { locale: ko })}
            </div>
          </div>
        )}
        <div className='flex items-center'>
          {!message.is_host && (
            <div className='rounded-full bg-blue-icon w-[40px] h-[40px] flex items-center justify-center mr-3'>
              <Image
                className='my-auto'
                src={`/userIcon${chatId % 18}.svg`}
                alt='userIcon'
                width={25}
                height={25}
              />
            </div>
          )}
          <div className={`my-2 ${position} w-full`}>
            <div className={`inline-flex items-end`}>
              {message.is_host && (
                <div className={`text-12 text-text-6 mr-2 ${timePosition}`}>{formattedTime}</div>
              )}
              <div
                id={`message-${index}`}
                className={`px-4 py-2 rounded-t-xl ${messageClass} ${messageHighlightClass}`}>
                {renderTextWithLineBreaks(message.message)}
              </div>
              {!message.is_host && (
                <div className={`text-12 text-text-6 ml-2 ${timePosition}`}>{formattedTime}</div>
              )}
            </div>
          </div>
        </div>
        {(index === offset + 19 || index === messageCount - 1) && (
          <div className='flex justify-center flex-col items-center'>
            {index !== messageCount - 1 && (
              <button className='mb-3' onClick={loadMoreMessages}>
                {svgLoading}
              </button>
            )}
            <div className='text-center text-14 text-text-3 border-border border-[1px] rounded-[40px] w-[70px] h-[30px] flex items-center justify-center'>
              {format(parsedDate, 'M/d eee', { locale: ko })}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { value: searchInput, onChange: handleSearchInput, setValue } = useInput();
  const onSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchResults([]);
    setValue('');
  };
  const [searchResults, setSearchResults] = useState<number[]>([]);

  const [currentResultIndex, setCurrentResultIndex] = useState(-1);

  const handleSearchInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newSearchResults = messages
        .map((message, index) => ({ message: message.message, index }))
        .filter(({ message }) => message.toLowerCase().includes(searchInput.toLowerCase()))
        .map(({ index }) => index);
      console.log(newSearchResults);
      setSearchResults(newSearchResults);
      setCurrentResultIndex(0);
      if (newSearchResults.length > 0) {
        scrollToResult(newSearchResults[0]);
      }
    }
  };

  const handleUpButtonClick = () => {
    if (currentResultIndex >= 0 && currentResultIndex < searchResults.length - 1) {
      const newIndex = currentResultIndex + 1;
      setCurrentResultIndex(newIndex);
      scrollToResult(searchResults[newIndex]);
    }
  };

  const handleDownButtonClick = () => {
    if (currentResultIndex > 0 && currentResultIndex < searchResults.length) {
      const newIndex = currentResultIndex - 1;
      setCurrentResultIndex(newIndex);
      scrollToResult(searchResults[newIndex]);
    }
  };

  const scrollToResult = (index: number) => {
    const messageElement = document.getElementById(`message-${index}`);
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadTxtFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportClick = async () => {
    const response = await chatApi.getTxtChatRoomById({ id: chatId });
    const filename = `PinTalk_${chatRoomGuest}.txt`;
    downloadTxtFile(response, filename);
  };

  const [pinnedChatRooms, setPinnedChatRooms] = useState<number[]>([]);

  const handlePinButtonClick = (chatRoomId: number) => {
    if (pinnedChatRooms.includes(chatRoomId)) {
      const newPinnedChatRooms = pinnedChatRooms.filter((id) => id !== chatRoomId);
      setPinnedChatRooms(newPinnedChatRooms);
      localStorage.setItem('pinnedChatRooms', JSON.stringify(newPinnedChatRooms));
    } else {
      if (pinnedChatRooms.length < 5) {
        const newPinnedChatRooms = [...pinnedChatRooms, chatRoomId];
        setPinnedChatRooms(newPinnedChatRooms);
        localStorage.setItem('pinnedChatRooms', JSON.stringify(newPinnedChatRooms));
      } else {
        alert('최대 5개의 채팅방만 고정할 수 있습니다.');
      }
    }
  };

  const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const storedPinnedChatRooms = localStorage.getItem('pinnedChatRooms');
    if (storedPinnedChatRooms) {
      setPinnedChatRooms(JSON.parse(storedPinnedChatRooms));
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage('pinnedChatRooms', pinnedChatRooms);
  }, [pinnedChatRooms]);

  const notClosedChatRooms = chatRooms
    .filter((chatRoom) => !chatRoom.isClosed)
    .sort((a, b) => new Date(b.latestMsgAt).getTime() - new Date(a.latestMsgAt).getTime());

  const closedChatRooms = chatRooms
    .filter((chatRoom) => chatRoom.isClosed)
    .sort((a, b) => new Date(b.latestMsgAt).getTime() - new Date(a.latestMsgAt).getTime());

  const notClosedPinnedChatRooms = notClosedChatRooms.filter((chatRoom) =>
    pinnedChatRooms.includes(chatRoom.id),
  );

  const notClosedNotPinnedChatRooms = notClosedChatRooms.filter(
    (chatRoom) => !pinnedChatRooms.includes(chatRoom.id),
  );

  const closedPinnedChatRooms = closedChatRooms.filter((chatRoom) =>
    pinnedChatRooms.includes(chatRoom.id),
  );

  const closedNotPinnedChatRooms = closedChatRooms.filter(
    (chatRoom) => !pinnedChatRooms.includes(chatRoom.id),
  );

  const filteredNotClosedPinnedChatRooms = notClosedPinnedChatRooms.filter((chatRoom) =>
    chatRoom.guest.includes(inputSearch),
  );
  const filteredNotClosedNotPinnedChatRooms = notClosedNotPinnedChatRooms.filter((chatRoom) =>
    chatRoom.guest.includes(inputSearch),
  );
  const filteredClosedPinnedChatRooms = closedPinnedChatRooms.filter((chatRoom) =>
    chatRoom.guest.includes(inputSearch),
  );
  const filteredClosedNotPinnedChatRooms = closedNotPinnedChatRooms.filter((chatRoom) =>
    chatRoom.guest.includes(inputSearch),
  );

  return (
    <div>
      {/* {(filteredNotClosedPinnedChatRooms.length > 0 ||
        filteredNotClosedNotPinnedChatRooms.length > 0) &&
        (filteredClosedPinnedChatRooms.length > 0 ||
          filteredClosedNotPinnedChatRooms.length > 0) && ( */}
      <div className='flex h-full'>
        <div className='flex flex-col'>
          <div className='bg-BG-4 min-h-[100px] w-full border-b-[2px] flex justify-center items-center border-r-[2px]'>
            <div>{svgSearch}</div>
            <input
              value={inputSearch}
              onChange={handleInputSearchChange}
              className='bg-BG-4 w-[415px] text-text-5 pl-2 focus:outline-none'
              placeholder='닉네임을 검색해보세요'></input>
          </div>
          <div className='w-[520px] pt-7 px-10 h-[calc(100vh-100px)] overflow-y-auto border-r-[2px]'>
            {(filteredNotClosedPinnedChatRooms.length > 0 ||
              filteredNotClosedNotPinnedChatRooms.length > 0) && (
              <div>
                <div className='flex justify-start items-center text-18 text-text-3'>
                  <div>최근 대화내역</div>
                </div>
                {[...filteredNotClosedPinnedChatRooms, ...filteredNotClosedNotPinnedChatRooms].map(
                  (chatRoom) => (
                    <div
                      key={chatRoom.id}
                      onClick={() =>
                        handleChatRoomClick(chatRoom.id, chatRoom.name, chatRoom.guest)
                      }
                      className={`w-[440px] h-[100px] mt-4 rounded-xl flex items-center justify-between px-6 shadow-custom2 ${
                        chatRoom.id === activeChat
                          ? 'border-border-2 border-[1px] bg-blue-chat'
                          : 'bg-white'
                      }`}>
                      <div className='flex items-center'>
                        <div className='rounded-full bg-blue-icon w-[40px] h-[40px] flex items-center justify-center'>
                          <Image
                            className='my-auto'
                            src={`/userIcon${chatRoom.id % 18}.svg`}
                            alt='userIcon'
                            width={25}
                            height={25}
                          />
                        </div>
                        <div className='ml-5'>
                          <div className='flex'>
                            <div className='font-PretendardSemibold text-text-2 mr-2'>
                              {chatRoom.guest}
                            </div>
                            <button onClick={() => handlePinButtonClick(chatRoom.id)}>
                              {pinnedChatRooms.includes(chatRoom.id) ? svgPinOn : svgPinOff}
                            </button>
                          </div>
                          <div className='text-text-4 text-14 w-[230px] overflow-hidden overflow-ellipsis whitespace-nowrap '>
                            {chatRoom.latestMsg}
                          </div>
                        </div>
                      </div>
                      <div className='text-text-6 text-12'>{timeAgo(chatRoom.latestMsgAt)}</div>
                    </div>
                  ),
                )}
              </div>
            )}
            {(filteredClosedPinnedChatRooms.length > 0 ||
              filteredClosedNotPinnedChatRooms.length > 0) && (
              <div>
                <div className='flex justify-start items-center text-18 text-text-3 mt-8'>
                  <div>종료된 대화</div>
                </div>
                {[...filteredClosedPinnedChatRooms, ...filteredClosedNotPinnedChatRooms].map(
                  (chatRoom) => (
                    <div
                      key={chatRoom.id}
                      onClick={() =>
                        handleChatRoomClick(chatRoom.id, chatRoom.name, chatRoom.guest)
                      }
                      className={`w-[440px] h-[100px] mt-4 rounded-xl flex items-center justify-between px-6 shadow-custom2 ${
                        chatRoom.id === activeChat
                          ? 'border-border-2 border-[1px] bg-blue-chat'
                          : 'bg-white'
                      }`}>
                      <div className='flex items-center'>
                        <div className='rounded-full bg-blue-icon w-[40px] h-[40px] flex items-center justify-center'>
                          <Image
                            className='my-auto'
                            src={`/userIcon${chatRoom.id % 18}.svg`}
                            alt='userIcon'
                            width={25}
                            height={25}
                          />
                        </div>
                        <div className='ml-5'>
                          <div className='flex'>
                            <div className='font-PretendardSemibold text-text-2 mr-2'>
                              {chatRoom.guest}
                            </div>
                            <button onClick={() => handlePinButtonClick(chatRoom.id)}>
                              {pinnedChatRooms.includes(chatRoom.id) ? svgPinOn : svgPinOff}
                            </button>
                          </div>
                          <div className='text-text-4 text-14 w-[230px] overflow-hidden overflow-ellipsis whitespace-nowrap '>
                            {chatRoom.latestMsg}
                          </div>
                        </div>
                      </div>
                      <div className='text-text-6 text-12'>{timeAgo(chatRoom.latestMsgAt)}</div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
        <div className='flex-1 flex flex-col relative'>
          {isChatActive ? (
            <>
              <div className='bg-BG-4 min-h-[100px] w-full border-b-[2px] flex justify-between items-center'>
                <div className='min-h-[75px] w-full flex justify-between items-center pl-8 pr-10'>
                  <div className='flex items-center'>
                    <div className='rounded-full bg-blue-icon w-[40px] h-[40px] flex items-center justify-center mr-3'>
                      <Image
                        className='my-auto'
                        src={`/userIcon${chatId % 18}.svg`}
                        alt='userIcon'
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className='font-PretendardSemibold text-text-2 mr-4'>{chatRoomGuest}</div>
                    {isClosed ? (
                      <div className='flex'>
                        <button
                          onClick={openRestartChatPopup}
                          className='font-PretendardMedium text-text-3 px-4 py-2 rounded-[10px] border-[1px] border-border shadow-custom2 mr-3'>
                          대화 재개하기
                        </button>
                        <button
                          onClick={openDeleteChatPopup}
                          className='font-PretendardMedium text-custom_red bg-red_sub px-4 py-2 rounded-[10px] border-[1px] border-custom_red shadow-custom2'>
                          대화창 나가기
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={openStopChatPopup}
                        className='font-PretendardMedium text-text-3 px-4 py-2 rounded-[10px] border-[1px] border-border shadow-custom2'>
                        대화 종료하기
                      </button>
                    )}
                    {isStopChatPopupOpen && (
                      <StopChatPopup
                        isOpen={isStopChatPopupOpen}
                        onClose={closeStopChatPopup}
                        onStop={onClickStopChat}
                      />
                    )}
                    {isRestartChatPopupOpen && (
                      <RestartChatPopup
                        isOpen={isRestartChatPopupOpen}
                        onClose={closeRestartChatPopup}
                        onRestart={onClickRestartChat}
                        id={chatId}
                      />
                    )}
                    {isDeleteChatPopupOpen && (
                      <DeleteChatPopup
                        isOpen={isDeleteChatPopupOpen}
                        onClose={closeDeleteChatPopup}
                        onDelete={onClickDeleteChat}
                        id={chatId}
                      />
                    )}
                  </div>
                  <button onClick={onClickX}>{svgX}</button>
                </div>
              </div>
              <div className='bg-white border-b-[1px] border-border-1'>
                <div
                  className={`flex-1 overflow-y-auto ${
                    isSearchOpen ? 'h-[calc(100vh-315px)]' : 'h-[calc(100vh-260px)]'
                  } flex flex-col chat-window px-6 py-8`}>
                  {messages.map((message, index) => renderMessage(message, index))}
                </div>
                {isSearchOpen && (
                  <div className='flex h-[55px] items-center shadow-search px-6 justify-between'>
                    <div className='flex items-center w-full'>
                      <div>{svgSearch}</div>
                      <input
                        placeholder='대화 내용을 검색해보세요'
                        className='focus:outline-none text-text-5 ml-3 w-full'
                        value={searchInput}
                        onKeyPress={handleSearchInputKeyPress}
                        onChange={handleSearchInput}
                      />
                    </div>
                    <div className='flex'>
                      <button onClick={handleUpButtonClick} className='mr-2'>
                        {svgUp}
                      </button>
                      <button onClick={handleDownButtonClick}>{svgDown}</button>
                    </div>
                  </div>
                )}
              </div>
              <div className='flex bg-white flex-col h-full'>
                <div className='h-full flex items-center pl-5 pr-10'>
                  <div className='h-full w-full'>
                    <div className='h-[40px] flex pt-4 pl-2'>
                      <button onClick={onSearchClick} className='mr-4'>
                        {svgSearch2}
                      </button>
                      <button onClick={handleExportClick} className=''>
                        {svgExport}
                      </button>
                    </div>
                    <textarea
                      className='flex-1 bg-white p-2 mr-2 w-full focus:outline-none h-[110px] resize-none'
                      placeholder='메시지를 입력하세요'
                      value={inputMessage}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  <button
                    disabled={isMessage}
                    className={`${
                      isMessage ? 'bg-BG-inactive' : 'bg-blue-main'
                    } text-white w-[68px] h-[44px] flex justify-center items-center rounded-full`}
                    onClick={handleSendButtonClick}>
                    전송
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className='flex items-center justify-center h-full'>
              <div className='mr-2'>{svgPintalkGray}</div>
              {svgPinTalkEmoGray}
            </div>
          )}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default AdminChatPage;
