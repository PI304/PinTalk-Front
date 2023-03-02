import useInput from '../../hooks/useInput';
import Link from 'next/link';
import { svgCheckIcon2 } from '../../styles/svg';

export const SignUpPage2 = () => {
  const { value: passWord, onChange: onChangePassWord } = useInput();
  const { value: passWordCheck, onChange: onChangePassWordCheck } = useInput();

  return (
    <div className='flex justify-center items-center '>
      <div className=''>
        <div className='text-center md:mt-10 mt-20'>
          <div className='font-Montserrat font-bold text-blue-main text-38'>SIGN UP</div>
          <div className='text-text-3 mt-3'>
            서비스 이용에 필요한 안전한 비밀번호를 설정해 주세요
          </div>
        </div>
        <div className='flex justify-center items-center mt-12'>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-blue-main'>
            {svgCheckIcon2}
          </div>
          <div className='border-t-2 border-blue-main md:w-[64px] w-[98px] mx-2'></div>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-white'>
            <div className='text-blue-main text-16 font-PretendardSemibold'>2</div>
          </div>
          <div className='border-t-2 border-border md:w-[64px] w-[98px] mx-2'></div>
          <div className='border-2 border-border rounded-full w-[34px] h-[34px] flex justify-center items-center bg-white'>
            <div className='text-border text-16 font-PretendardSemibold'>3</div>
          </div>
        </div>
        <div className='text-text-6 text-14 flex justify-between md:px-[34px] px-[138px] mt-2 font-PretendardMedium'>
          <div className='text-text-2'>이메일 인증</div>
          <div className='text-text-2'>비밀번호 설정</div>
          <div>서비스 입력</div>
        </div>
        <div className='box-border bg-white md:w-[362px] w-[636px] md:h-[303px] h-[344px] shadow-custom rounded-[10px] flex flex-col justify-center items-center mt-10'>
          <div className='flex'>
            <div className='md:mt-4 mt-10 text-text-5'>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>비밀번호</div>
                <div>
                  <input
                    type='password'
                    id='PassWord'
                    value={passWord}
                    onChange={onChangePassWord}
                    placeholder='8~16자 이내 영문, 숫자, 특수문자 혼합'
                    className='md:w-[320px] w-[392px] h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                  />
                </div>
              </div>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>비밀번호 확인</div>
                <div>
                  <input
                    type='password'
                    id='PassWordCheck'
                    value={passWordCheck}
                    onChange={onChangePassWordCheck}
                    placeholder='비밀번호를 다시 입력해주세요'
                    className='md:w-[320px] w-[392px] h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='md:mt-2 mt-6 flex justify-end md:w-[300px] w-[580px]'>
            {passWord === '' || passWordCheck === '' || passWord !== passWordCheck ? (
              <div className='p-2 md:w-[75px] w-[94px] h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
                다음
              </div>
            ) : (
              <Link href='./signup3'>
                <button
                  type='button'
                  className='p-2 md:w-[75px] w-[94px] h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
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
