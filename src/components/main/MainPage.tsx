import Link from 'next/link';
import { svgArrowBlack } from '@styles/svg';
import { Slogan } from '../common';
import { svgArrowWhite } from '@styles/svg';

const MainPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex xl:flex-col 2xl:h-[650px] h-[800px] justify-center'>
        <div className='xl:hidden'>
          <Slogan />
        </div>
        <div className='xl-min:hidden flex xl-min:mt-40 font-Montserrat w-full justify-center'>
          <div className='gird grid-rows-2'>
            <div className='flex items-center text-36 text-blue-main font-bold'>
              Put
              <img className='mx-1 xl:w-[70px]' src='/hand.svg' alt='hand' />
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
              <img className='ml-1 xl:w-[70px]' src='/world.svg' alt='world' />
            </div>
          </div>
        </div>
        <div className='xl-min:w-[calc(100%-950px)] 2xl-min:w-[calc(100%-1060px)] flex justify-center'>
          <div className='flex flex-col text-text-1 xl:items-center xl:text-center'>
            <div className='xl:mt-16 2xl:mt-52 mt-64 2xl:text-26 text-38 xl:text-22 font-PretendardSemibold'>
              핀톡을 통해 어디서든 간편하고 쉽게
              <div className='mt-3'>나만의 대화창을 생성해보세요</div>
            </div>
            <Link href='/login'>
              <div className='bg-blue-main xl:w-[151px] xl:h-[44px] w-[175px] h-[53px] flex justify-center items-center text-white rounded-full xl:text-16 text-19 mt-10'>
                <div>지금 시작하기</div>
                <div className='ml-3'>{svgArrowWhite}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-white flex justify-center'>
        <div className='xl:h-[790px] 2xl:h-[700px] h-[840px] xl:mt-16 flex xl:flex-col xl:items-center  xl-min:justify-between xl:w-full 2xl:w-9/12 w-8/12'>
          <div className='flex flex-col justify-center items-center '>
            <div className='xl:text-center xl:flex flex-col items-center'>
              <div className='font-PretendardSemibold text-text-1 xl:text-28 text-34'>
                어디든지 쉽고 간편하게
                <br /> 설치가 가능해요
              </div>
              <div className='font-PretendardMedium text-text-2 xl:text-16 text-20 mt-7'>
                내가 만든 포트폴리오 사이트에 간편하게 설치하여
                <br />
                실시간으로 채팅을 주고받아보세요
              </div>
              <Link href='/description'>
                <div
                  className='bg-BG-1 font-PretendardMedium text-text-3 xl:text-16 text-19 xl:w-[140px] xl:h-[44px] w-[159px] h-[53px] rounded-3xl flex justify-center items-center mt-8'
                  onClick={() => {
                    sessionStorage.setItem('scrollTo', 'packageDownload');
                  }}>
                  <div className='mr-2'>더 알아보기</div>
                  <div>{svgArrowBlack}</div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex relative 2xl:mt-20 mt-28 xl:w-[360px]  2xl:w-[530px] w-[650px]'>
            <div className='xl:w-[170px] 2xl:w-[260px] w-[330px] xl:mt-24 2xl:mt-28 mt-32 absolute left-0 z-10'>
              <img
                src='/landing_profile.svg'
                alt='profile'
                width={500}
                height={10}
                className='rounded-[10px] shadow-chat'
              />
            </div>
            <div className='xl:w-[220px] 2xl:w-[300px] w-[370px] absolute right-0 z-0'>
              <img
                src='/landing_chat.svg'
                alt='chat'
                width={500}
                height={10}
                className='rounded-[10px] shadow-chat'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-gradi-1 to-gradi-2 flex justify-center'>
        <div className='xl:h-[780px] 2xl:h-[700px] h-[840px] xl:mt-16 flex xl:flex-col xl:items-center xl-min:justify-between xl:w-full 2xl:w-9/12 w-8/12'>
          <div className='flex xl:hidden 2xl:mt-20 2xl:w-[530px] w-[650px]'>
            <div className='2xl:w-[260px] w-[490px] 2xl:mt-28 mt-32 '>
              <img
                src='/users.svg'
                alt='chat'
                width={500}
                height={10}
                className='rounded-[10px] shadow-profile'
              />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <div className='xl:text-center xl:flex flex-col items-center'>
              <div className='font-PretendardSemibold text-text-1 xl:text-28 text-34'>
                버튼 하나로 손 쉽게
                <br /> 그동안의 대화 내용을 내보내요
              </div>
              <div className='font-PretendardMedium text-text-2 xl:text-16 text-20 mt-7'>
                저장하고 싶었던 대화 내역들, 번거로운 붙여넣기는 그만!
                <br />
                핀톡에서는 한 번에 내보내고 저장할 수 있어요
              </div>
              <Link href='/description'>
                <div
                  className='bg-BG-1 font-PretendardMedium text-text-3 xl:text-16 text-19 xl:w-[140px] xl:h-[44px] w-[159px] h-[53px] rounded-3xl flex justify-center items-center mt-8'
                  onClick={() => {
                    sessionStorage.setItem('scrollTo', 'packageDownload');
                  }}>
                  <div className='mr-2'>더 알아보기</div>
                  <div>{svgArrowBlack}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white flex justify-center'>
        <div className='xl:h-[730px] 2xl:h-[700px] h-[840px] xl:mt-16 flex xl:flex-col xl:items-center xl-min:justify-between xl:w-full 2xl:w-9/12 w-8/12'>
          <div className='flex flex-col justify-center items-center '>
            <div className='xl:text-center xl:flex flex-col items-center'>
              <div className='font-PretendardSemibold text-text-1 xl:text-28 text-34'>
                핀톡의 채팅방은
                <br /> 자유로운 커스텀이 가능해요
              </div>
              <div className='font-PretendardMedium text-text-2 xl:text-16 text-20 mt-7'>
                핀톡의 색상 커스텀 기능으로 내 웹페이지에 맞는
                <br />
                무드로 전체적인 룩앤필을 완성해 보세요
              </div>
              <Link href='/description'>
                <div
                  className='bg-BG-1 font-PretendardMedium text-text-3 xl:text-16 text-19 xl:w-[140px] xl:h-[44px] w-[159px] h-[53px] rounded-3xl flex justify-center items-center mt-8'
                  onClick={() => {
                    sessionStorage.setItem('scrollTo', 'chatColor');
                  }}>
                  <div className='mr-2'>더 알아보기</div>
                  <div>{svgArrowBlack}</div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex xl:w-[370px] 2xl:w-[570px] w-[670px] xl:justify-center'>
            <div className='xl:w-[220px] 2xl:w-[270px] w-[300px] xl:mt-32 2xl:mt-40 mt-52 '>
              <img
                src='/landing_chat.svg'
                alt='chat'
                width={340}
                height={10}
                className='rounded-[10px] shadow-chat'
              />
            </div>
            <div className='xl:w-[260px] 2xl:w-[300px] w-[370px] xl:mt-8 2xl:mt-16 mt-20 '>
              <img
                src='/landing_chat2.svg'
                alt='chat'
                width={500}
                height={10}
                className='rounded-[10px] shadow-cha2'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-blue-main flex justify-center'>
        <div className='h-[900px]'>
          <div className='font-PretendardSemibold text-white text-34 text-center mt-24'>
            핀톡에서 경험하는
            <br />
            간편한 대화, 지금 바로 시작해 보세요
          </div>
        </div>
        <div>{/* <img src='/landing_admin.svg' /> */}</div>
      </div>
      <div className='bg-[#1C5097] flex justify-center'>
        <div className='xl:h-[130px] h-[200px] flex justify-center items-center'>
          <Link href='/login'>
            <div className='bg-blue-main xl:w-[160px] xl:h-[44px] w-[230px] h-[65px] flex justify-center items-center text-white rounded-full xl:text-16 text-24 xl:mr-6 mr-10'>
              <div>지금 시작하기</div>
              <div className='ml-3'>{svgArrowWhite}</div>
            </div>
          </Link>
          <Link href='/description'>
            <div
              className='bg-BG-1 font-PretendardMedium text-text-3 xl:text-16 text-24 xl:w-[140px] xl:h-[44px] w-[200px] h-[65px] rounded-full flex justify-center items-center'
              onClick={() => {
                sessionStorage.setItem('scrollTo', 'packageDownload');
              }}>
              <div className='mr-2'>더 알아보기</div>
              <div>{svgArrowBlack}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
