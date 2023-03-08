import useInput from '../../hooks/useInput';
import useGlobalInput from '@/hooks/useGlobalInput';
import Link from 'next/link';
import { useAppSelector } from '@/features/hooks';

export const SignUpPage = () => {
  const { value: email, onChange: onChangeEmail } = useGlobalInput('', 'email');
  const { value: code, onChange: onChangeCode } = useInput();
  const userState = useAppSelector((state) => state.user);
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
        <div className='box-border bg-white md:w-[362px] w-[636px] md:h-[303px] h-[344px] shadow-custom rounded-[10px] flex flex-col justify-center items-center mt-10'>
          <div className='flex '>
            <div className='md:mt-4 mt-10 text-text-5'>
              <div className=''>
                <div className='mb-1 text-text-1 font-PretendardMedium'>이메일</div>
                <div className='flex'>
                  <input
                    type='text'
                    id='email'
                    value={email}
                    onChange={onChangeEmail}
                    placeholder='이메일 형식에 맞게 입력해주세요'
                    className='md:w-[212px] w-80 h-12 px-3 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                  />
                  <button className='text-blue-main text-14 rounded-[10px] bg-blue-sub2 w-[100px] h-12 ml-2 font-PretendardMedium'>
                    인증 코드 전송
                  </button>
                </div>
              </div>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>인증 코드 입력</div>
                <div className='flex'>
                  <input
                    type='text'
                    id='code'
                    value={code}
                    onChange={onChangeCode}
                    placeholder='전송된 인증 코드를 입력해주세요'
                    className='md:w-[212px] w-80 h-12 px-3 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                  />
                  <button className='text-blue-main text-14 rounded-[10px] bg-blue-sub2  w-[100px] h-12 ml-2 font-PretendardMedium'>
                    인증 코드 확인
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:mt-2 mt-6 flex justify-end md:w-[300px] w-[580px]'>
            {email === '' || code === '' ? (
              <div className='p-2 md:w-[75px] w-[94px] h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
                다음
              </div>
            ) : (
              <Link href='./signup2'>
                <button
                  type='button'
                  className=' p-2 md:w-[75px] w-[94px] h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
                  다음
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
