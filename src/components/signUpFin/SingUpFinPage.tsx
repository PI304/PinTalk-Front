import Link from 'next/link';
import { svgCheckIcon2 } from '../../styles/svg';

const SingUpFinPage = () => {
  return (
    <div className='flex flex-col items-center '>
      <div className='flex justify-center items-center md:mt-[181px] mt-[221px]'>
        <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-blue-main'>
          {svgCheckIcon2}
        </div>
        <div className='border-t-2 border-blue-main md:w-[64px] w-[98px] mx-2'></div>
        <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-blue-main'>
          {svgCheckIcon2}
        </div>
        <div className='border-t-2 border-blue-main md:w-[64px] w-[98px] mx-2'></div>
        <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-blue-main'>
          {svgCheckIcon2}
        </div>
      </div>
      <div className='text-text-2 text-14 flex justify-between w-[360px] mt-2 font-PretendardMedium '>
        <div>이메일 인증</div>
        <div>비밀번호 설정</div>
        <div>서비스 입력</div>
      </div>
      <div className='text-text-1 text-center md:mt-[60px] mt-16 text-24 2xl:mt-28 font-PretendardSemibold'>
        축하합니다! 회원가입이 완료되었어요
        <br />
        지금 바로 핀톡을 시작해보세요
      </div>
      <Link href='/login'>
        <button className='rounded-full py-3 px-5 text-white text-16 bg-gradient-to-r from-blue-main to-gradi-3 md:mt-12 mt-12 mb-32 2xl:mb-28'>
          로그인 하러 가기
        </button>
      </Link>
    </div>
  );
};

export default SingUpFinPage;
