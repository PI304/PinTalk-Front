import Link from 'next/link';

export const MainPage = () => {
  return (
    <div>
      <nav className='flex items-center justify-between flex-wrap px-44 py-8'>
        <div className='font-Montserrat font-bold text-blue-main text-32 bg-white'>PinTalk</div>
        <div className='font-Pretendard text-base'>
          <span className='text-blue-main text-24'>
            <button>로그인</button>
          </span>
          <span className='px-5 py-3 text-white bg-blue-main rounded-2xl'>
            <button>회원가입</button>
          </span>
        </div>
      </nav>
      <div className='bg-gradient-radial from-gradi-1 to-gradi-2 h-screen'></div>
    </div>
  );
};
