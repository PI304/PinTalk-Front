import SignUpForm from './SignUpForm';
import { useAppSelector } from '@features/hooks';

const SignUpPage = () => {
  const userState = useAppSelector((state: any) => state.user);
  console.log(userState);

  return (
    <div className='flex justify-center items-center '>
      <div className=''>
        <div className='text-center md:mt-10 mt-20'>
          <div className='font-Montserrat font-bold text-blue-main text-38'>SIGN UP</div>
          <div className='text-text-3 mt-3'>환영합니다! 핀톡과 함께 편리한 대화, 시작해보세요</div>
        </div>
        <div className='flex justify-center items-center mt-12'>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-white'>
            <div className='text-blue-main text-16 font-PretendardSemibold'>1</div>
          </div>
          <div className='border-t-2 border-border md:w-[64px] w-[98px] mx-2'></div>
          <div className='border-2 border-border rounded-full w-[34px] h-[34px] flex justify-center items-center bg-white'>
            <div className='text-border text-16 font-PretendardSemibold'>2</div>
          </div>
          <div className='border-t-2 border-border md:w-[64px] w-[98px] mx-2'></div>
          <div className='border-2 border-border rounded-full w-[34px] h-[34px] flex justify-center items-center bg-white'>
            <div className='text-border text-16 font-PretendardSemibold'>3</div>
          </div>
        </div>
        <div className='text-text-6 text-14 flex justify-between md:px-[34px] px-[138px] mt-2 font-PretendardMedium'>
          <div className='text-text-2'>이메일 인증</div>
          <div>비밀번호 설정</div>
          <div>서비스 입력</div>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
