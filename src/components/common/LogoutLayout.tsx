import Link from 'next/link';
import { svgPinTalkEmo } from '@styles/svg';
import { ChildrenType } from 'types/base';

const LogoutLayout = ({ children }: ChildrenType) => {
  return (
    <div className='min-h-[970px] h-screen bg-gradient-to-b from-gradi-1 to-gradi-2'>
      <nav className='flex items-center md:justify-center justify-between flex-wrap 2xl:mx-32 mx-44 2xl:h-[70px] h-[88px] md:mx-6'>
        <div>
          <Link href='/main'>
            <div className='font-Montserrat font-bold text-blue-main md:text-28 text-20  flex items-center'>
              PinTalk<div className=''>{svgPinTalkEmo}</div>
            </div>
          </Link>
        </div>
        <div className='font-PretendardSemibold text-base md:hidden'>
          <Link href='/login'>
            <span className='text-blue-main text-16 mx-6'>
              <button>로그인</button>
            </span>
          </Link>
          <Link href='/signup'>
            <span className='px-5 py-3 text-white text-16 bg-blue-main rounded-2xl'>
              <button>회원가입</button>
            </span>
          </Link>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default LogoutLayout;
