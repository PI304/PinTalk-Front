import Link from 'next/link';
import { svgMessage, svgPinTalkEmo, svgSetting } from '@/styles/svg';
import { ChildrenType } from '@/@types/base';
import { svgDrawer, svgPerson } from '../../styles/svg';

export const AdminLayout = ({ children }: ChildrenType) => {
  return (
    <div className='h-screen'>
      <nav className='flex items-center justify-between flex-wrap 2xl:mx-32 mx-44 2xl:h-[70px] h-[88px] md:mx-6'>
        <div className='flex items-start md-min:hidden'>{svgDrawer}</div>
        <div>
          <Link href='/main'>
            <div className='font-Montserrat font-bold text-blue-main md:text-28 text-20 bg-white flex items-center'>
              PinTalk<div className=''>{svgPinTalkEmo}</div>
            </div>
          </Link>
        </div>
        <div></div>
        <div className='font-PretendardSemibold text-base md:hidden'>
          <span className='px-5 py-3 text-white text-16 bg-blue-main rounded-2xl'>
            <button>로그아웃</button>
          </span>
        </div>
      </nav>
      <div className='bg-BG-2 h-screen'>
        <div className='flex'>
          <div className='bg-blue-main w-[240px] h-screen flex  justify-center'>
            <div className='text-white'>
              <div>{svgMessage}대화창</div>
              <div>{svgPerson}내 정보</div>
              <div>{svgSetting}환경설정</div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
