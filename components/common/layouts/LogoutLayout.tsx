import { svgPinTalkEmo } from '@/styles/svg';
import { ChildrenType } from '@/@types/base';
import { svgDrawer } from '../../../styles/svg';

export const LoginLayout = ({ children }: ChildrenType) => {
  return (
    <div className='h-screen'>
      <nav className='flex items-center justify-between flex-wrap 2xl:mx-32 mx-44 md:h-[70px] h-[88px] md:mx-6'>
        <div className='flex items-start md-min:hidden'>{svgDrawer}</div>
        <div>
          <div className='font-Montserrat font-bold text-blue-main md:text-28 text-20 bg-white flex items-center'>
            PinTalk<div className=''>{svgPinTalkEmo}</div>
          </div>
        </div>
        <div></div>
        <div className='font-PretendardSemibold text-base md:hidden'>
          <span className='text-blue-main text-16 mx-6'>
            <button>로그인</button>
          </span>
          <span className='px-5 py-3 text-white text-16 bg-blue-main rounded-2xl'>
            <button>회원가입</button>
          </span>
        </div>
      </nav>
      <div className='bg-gradient-radial at-27.45% 52.08% from-gradi-1 to-gradi-2 md:h-screen'>
        {children}
      </div>
    </div>
  );
};
