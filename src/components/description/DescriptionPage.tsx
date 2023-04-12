import CodeContent from './CodeContent';
import Content from './Content';
import { useState, useEffect } from 'react';

const Description = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [scrollToId, setScrollToId] = useState('');

  useEffect(() => {
    const storedScrollTo = sessionStorage.getItem('scrollTo');
    if (storedScrollTo) {
      const element = document.getElementById(storedScrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      sessionStorage.removeItem('scrollTo');
    }
  }, []);
  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollToId('');
    }
  }, [scrollToId]);

  return (
    <div className='min-h-screen'>
      <div className='w-[1300px] mx-auto'>
        <div className='xl:hidden flex justify-between items-center mt-40 font-Montserrat  text-blue-main font-bold text-64'>
          Put
          <img className='mx-3 w-[140px]' src='/hand.svg' alt='hand' />
          <div className='text-white bg-blue-main rounded-full px-10 py-3'>a pin</div>
          <img className='ml-3 w-[140px]' src='/pin.svg' alt='pin' />
          <div className='bg-blue-sub rounded-full px-10 py-3'>anywhere!</div>
          <img className='ml-3 w-[140px]' src='/world.svg' alt='world' />
        </div>
      </div>
      <div className='md:hidden xl-min:hidden flex mt-10 font-Montserrat w-full justify-center'>
        <div className='gird grid-rows-2'>
          <div className='flex items-center text-64 text-blue-main font-bold'>
            Put
            <img className='w-[130px] mx-2' src='/hand.svg' alt='hand' />
            <span className='text-white bg-blue-main rounded-full py-1 px-8 flex justify-center items-center'>
              a pin
            </span>
            <img className='w-[130px] mx-2' src='/pin.svg' alt='pin' />
          </div>
          <div className='flex mt-2 items-center justify-center '>
            <div className='text-64 font-bold text-blue-main'>
              <div className='bg-blue-sub rounded-full py-1 px-8 flex justify-center items-center'>
                anywhere!
              </div>
            </div>
            <img className='w-[130px] mx-2' src='/world.svg' alt='world' />
          </div>
        </div>
      </div>
      <div className='w-[1100px] xl:w-[800px] mx-auto'>
        <div className='font-PretendardMedium xl:text-18 text-20 flex mt-36 xl:mt-12 md:hidden'>
          <button
            className={`mr-4 xl:h-[47px] h-[60px] flex flex-col justify-between ${
              activeTab === 1 ? 'text-text-2' : 'text-text-5'
            }`}
            onClick={() => {
              setActiveTab(1);
              setScrollToId('packageDownload');
            }}>
            <div className='mx-3'>패키지 다운로드</div>
            <div
              className={`h-[6px] w-full  ${activeTab === 1 ? 'bg-BG-3' : 'bg-transparent'}`}></div>
          </button>
          <button
            className={`mx-4 xl:h-[47px] h-[60px] flex flex-col justify-between ${
              activeTab === 2 ? 'text-text-2' : 'text-text-5'
            }`}
            onClick={() => {
              setActiveTab(2);
              setScrollToId('packageInstance');
            }}>
            <div className='mx-3'>패키지 인스턴스 생성</div>
            <div
              className={`h-[6px] w-full ${activeTab === 2 ? 'bg-BG-3' : 'bg-transparent'}`}></div>
          </button>
          <button
            className={`mx-4 xl:h-[47px] h-[60px] flex flex-col justify-between ${
              activeTab === 3 ? 'text-text-2' : 'text-text-5'
            }`}
            onClick={() => {
              setActiveTab(3);
              setScrollToId('packageInit');
            }}>
            <div className='mx-3'>패키지 init</div>
            <div
              className={`h-[6px] w-full ${activeTab === 3 ? 'bg-BG-3' : 'bg-transparent'}`}></div>
          </button>
          <button
            className={`mx-4 xl:h-[47px] h-[60px] flex flex-col justify-between ${
              activeTab === 4 ? 'text-text-2' : 'text-text-5'
            }`}
            onClick={() => {
              setActiveTab(4);
              setScrollToId('chatColor');
            }}>
            <div className='mx-3'>채팅창 컬러 커스텀</div>
            <div
              className={`h-[6px] w-full ${activeTab === 4 ? 'bg-BG-3' : 'bg-transparent'}`}></div>
          </button>
        </div>
      </div>
      <div className='w-full border-t border-solid border-[#8A9EC4]'></div>
      <div className='w-[1100px] xl:w-[800px] md:w-[370px] mx-auto'>
        <Content
          id='packageDownload'
          title={'패키지 다운로드'}
          content={
            'The sun was setting behind the mountains, casting a warm orange glow across the valley. Birds chirped and flitted from tree to tree, filling the air with their sweet songs. A gentle breeze rustled the leaves and carried the scent of fresh pine. In the distance, a herd of deer grazed peacefully on the lush grass. It was a beautiful evening, and I felt grateful to be alive to witness such natural splendor.'
          }
        />
        <CodeContent
          num={1}
          title={'소제목'}
          content={
            '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용'
          }
          code={` const helloWorld = () => {
              console.log('Hello, world!');
            };`}
        />
        <Content
          id='packageInstance'
          title={'패키지 인스턴스 생성'}
          content={
            'The sun was setting behind the mountains, casting a warm orange glow across the valley. Birds chirped and flitted from tree to tree, filling the air with their sweet songs. A gentle breeze rustled the leaves and carried the scent of fresh pine. In the distance, a herd of deer grazed peacefully on the lush grass. It was a beautiful evening, and I felt grateful to be alive to witness such natural splendor.'
          }
        />
        <CodeContent
          num={1}
          title={'소제목'}
          content={
            '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용'
          }
          code={` const helloWorld = () => {
              console.log('Hello, world!');
            };`}
        />
        <Content
          id='packageInit'
          title={'패키지 init'}
          content={
            'The sun was setting behind the mountains, casting a warm orange glow across the valley. Birds chirped and flitted from tree to tree, filling the air with their sweet songs. A gentle breeze rustled the leaves and carried the scent of fresh pine. In the distance, a herd of deer grazed peacefully on the lush grass. It was a beautiful evening, and I felt grateful to be alive to witness such natural splendor.'
          }
        />
        <CodeContent
          num={1}
          title={'소제목'}
          content={
            '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용'
          }
          code={` const helloWorld = () => {
              console.log('Hello, world!');
            };`}
        />
        <Content
          id='chatColor'
          title={'채팅창 컬러 커스텀'}
          content={
            'The sun was setting behind the mountains, casting a warm orange glow across the valley. Birds chirped and flitted from tree to tree, filling the air with their sweet songs. A gentle breeze rustled the leaves and carried the scent of fresh pine. In the distance, a herd of deer grazed peacefully on the lush grass. It was a beautiful evening, and I felt grateful to be alive to witness such natural splendor.'
          }
        />
        <CodeContent
          num={1}
          title={'소제목'}
          content={
            '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용'
          }
          code={` const helloWorld = () => {
              console.log('Hello, world!');
            };`}
        />
      </div>
    </div>
  );
};

export default Description;
