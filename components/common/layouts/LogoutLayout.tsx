import { svgPinTalkEmo } from '@/styles/svg';
import { ChildrenType } from '@/@types/base';

export const LoginLayout = ({ children }: ChildrenType) => {
  return (
    <div className='h-screen'>
      <nav className='flex items-center justify-between flex-wrap md:mx-32 xl:mx-44 h-[88px]'>
        <div>
          <div className='font-Montserrat font-bold text-blue-main text-20 bg-white flex items-center'>
            PinTalk{svgPinTalkEmo}
          </div>
        </div>
        <div className='font-PretendardSemibold text-base'>
          <span className='text-blue-main text-16 mx-6'>
            <button>로그인</button>
          </span>
          <span className='px-5 py-3 text-white text-16 bg-blue-main rounded-2xl'>
            <button>회원가입</button>
          </span>
        </div>
      </nav>
      <div className='bg-gradient-radial at-27.45% 52.08% from-gradi-1 to-gradi-2'>{children}</div>
    </div>
  );
};
