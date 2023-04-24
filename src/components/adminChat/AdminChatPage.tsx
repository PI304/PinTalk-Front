import React, { useEffect, useState, useRef } from 'react';
import chatApi from '@apis/chat/chatApi';
import { chatRoom, chatMessage } from '@apis/chat/chatApti.type';
import Image from 'next/image';
import { svgDots } from '@styles/svg';

const AdminChatPage = () => {
  const [chatRooms, setChatRooms] = useState<chatRoom[]>([]);
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [messages, setMessages] = useState<chatMessage[]>([]);
  const chatSocket = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Fetch chat rooms
    chatApi.getChatRoomList().then((data) => {
      if (data && data.results && Array.isArray(data.results)) {
        console.log(data);
        setChatRooms(data.results);
      } else {
        console.error('Invalid chat rooms data:', data);
      }
    });
  }, []);

  const handleChatRoomClick = (chatRoomId: number, chatRoomName: string) => {
    setActiveChat(chatRoomId);

    // Fetch chat messages
    chatApi.GetChatRoomMessage({ id: chatRoomId, limit: 50, offset: 0 }).then((data) => {
      if (data && data.results && Array.isArray(data.results)) {
        setMessages(data.results);
      } else {
        console.error('Invalid messages data:', data);
      }
    });

    // WebSocket connection
    if (chatSocket.current) {
      chatSocket.current.close();
    }

    chatSocket.current = new WebSocket(`wss://api.pintalk.app/ws/chat/${chatRoomName}/`);

    chatSocket.current.onopen = () => {
      console.log('connected');
    };

    chatSocket.current.onmessage = (event) => {
      const data = JSON.parse(event.data) as chatMessage;
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    chatSocket.current.onclose = (event) => {
      console.log('disconnected');
    };
  };

  const sendMessage = (message: string) => {
    if (chatSocket.current && chatSocket.current.readyState === WebSocket.OPEN) {
      chatSocket.current.send(JSON.stringify({ message }));
    }
  };

  return (
    <div className='flex h-full'>
      {/* Chat room list */}
      <div className='w-[520px] pt-10 px-10 h-full'>
        <div className='flex justify-between items-center text-18 text-text-3'>
          <div>최근 대화내역</div>
          <div>{svgDots}</div>
        </div>
        {/* Render chat rooms */}
        {chatRooms.map((chatRoom) => (
          <div
            key={chatRoom.id}
            onClick={() => handleChatRoomClick(chatRoom.id, chatRoom.name)}
            className={`w-[440px] h-[100px]  mt-4 rounded-xl flex items-center justify-between px-6 shadow-custom2 ${
              chatRoom.id === activeChat ? 'border-border-2 border-[1px] bg-blue-chat' : 'bg-white'
            }`}>
            <div className='flex items-center'>
              <div className='rounded-full bg-blue-icon w-[40px] h-[40px] flex items-center justify-center'>
                <Image
                  className='my-auto'
                  src={`/userIcon${chatRoom.id % 18}.svg`}
                  alt='userImg'
                  width={25}
                  height={25}
                />
              </div>
              <div className='ml-5'>
                <div className='font-PretendardSemibold text-text-2'>{chatRoom.guest}</div>
                <div className='text-text-4 text-14 w-[230px] overflow-hidden overflow-ellipsis whitespace-nowrap '>
                  {chatRoom.latestMsg}
                </div>
              </div>
            </div>
            <div className='text-text-6 text-12'>30분전</div>
          </div>
        ))}
      </div>

      {/* Chat window */}
      <div className='flex-1 flex justify-end'>
        <div className='bg-black w-full h-full'>
          {/* Render messages */}
          {messages.map((message) => (
            <div key={message.id}>{message.content}</div>
          ))}
          {/* Input for sending messages */}
          <input
            type='text'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage(e.currentTarget.value);
                e.currentTarget.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminChatPage;
