import Link from 'next/link';
import { svgArrowBlack } from '@styles/svg';
import { Slogan } from '../common';
import { svgArrowWhite } from '@styles/svg';

const MainPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex md:flex-col h-[800px]'>
        <Slogan />
        <div className='md-min:hidden flex mt-40 font-Montserrat w-full justify-center'>
          <div className='gird grid-rows-2'>
            <div className='flex items-center text-36 text-blue-main font-bold'>
              Put
              <img className='mx-1 md:w-[70px]' src='/hand.svg' alt='hand' />
              <span className='text-white bg-blue-main rounded-full py-1 px-4 flex justify-center items-center'>
                a pin
              </span>
              <img className='ml-1 w-[70px]' src='/pin.svg' alt='pin' />
            </div>
            <div className='flex mt-2 items-center justify-center '>
              <div className='text-36 font-bold text-blue-main'>
                <div className='bg-blue-sub rounded-full py-1 px-4 flex justify-center items-center'>
                  anywhere!
                </div>
              </div>
              <img className='ml-1 md:w-[70px]' src='/world.svg' alt='world' />
            </div>
          </div>
        </div>
        <div className='md-min:w-[calc(100%-1060px)] flex justify-center'>
          <div className='flex flex-col text-text-1 md:items-center md:text-center'>
            <div className='md:mt-16 mt-64 text-38 md:text-22 font-PretendardSemibold'>
              핀톡을 통해 어디서든 간편하고 쉽게
              <div className='mt-3'>나만의 대화창을 생성해보세요</div>
            </div>
            <Link href='/login'>
              <div className='bg-blue-main w-[175px] h-[53px] flex justify-center items-center text-white rounded-full text-19 mt-10'>
                <div>지금 시작하기</div>
                <div className='ml-3'>{svgArrowWhite}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-white h-[880px] flex'>
        <div className=' flex flex-col justify-center items-center w-[1000px]'>
          <div className='w-[400px]'>
            <div className='font-PretendardSemibold text-text-1 text-34'>
              어디든지 쉽고 간편하게
              <br /> 설치가 가능해요
            </div>
            <div className='font-PretendardMedium text-text-2 text-20 mt-7'>
              내가 만든 포트폴리오 사이트에 간편하게 설치하여
              <br />
              실시간으로 채팅을 주고받아보세요
            </div>
            <Link href='/description'>
              <div className='bg-BG-1 font-PretendardMedium text-text-3 text-19 w-[159px] h-[53px] rounded-3xl flex justify-center items-center mt-8'>
                <div className='mr-2'>더 알아보기</div>
                <div>{svgArrowBlack}</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex'>
          <img src='/chat1.svg' alt='chat' width={370} height={30} className='ml-40' />
        </div>
      </div>
      <div className='bg-gradient-to-b from-gradi-1 to-gradi-2 h-[880px] flex'>
        <img src='/chat2.svg' alt='chat' width={800} height={30} className='ml-40' />
      </div>
    </div>
  );
};

export default MainPage;
