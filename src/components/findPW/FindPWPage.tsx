import { useForm } from 'react-hook-form';
import Slogan2 from '../common/Slogan2';
import { AuthEmail } from '@apis/auth/authApi.type';
import authApi from '@apis/auth/authApi';
import { useState } from 'react';
import { svgCheckIcon3, svgWarning } from '@styles/svg';

const FindPWPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<AuthEmail>();

  const [isEmailSentSuccess, setIsEmailSentSuccess] = useState(false);
  const [isEmailSentFailed, setIsEmailSentFailed] = useState(false);
  const emailInput = watch('email');
  const isEmailEmpty = !emailInput || emailInput.trim() === '';

  const onSubmit = async (data: AuthEmail) => {
    try {
      await authApi.postResetPassword(data);
      setIsEmailSentSuccess(true);
      setIsEmailSentFailed(false);
    } catch (error) {
      console.log(error);
      setIsEmailSentSuccess(false);
      setIsEmailSentFailed(true);
    }
  };

  return (
    <div className='flex lg:justify-center xl-min:justify-center lg:pl-0 xl:pl-10'>
      <Slogan2 />
      <div className='lg-min:w-[calc(100%-1060px)] xl-min:w-[calc(100%-950px)] 2xl-min:w-[calc(100%-1060px)] flex justify-center'>
        <div className='flex flex-col text-text-1'>
          <div className='md:flex md:justify-center xl:mt-36 2xl:mt-52 mt-60'>
            <div>
              <div className='font-PretendardSemibold text-28 text-text-1'>비밀번호 찾기</div>
              <div className='text-text-3 mt-5 text-16'>
                반가워요! 이메일 계정을 통해 로그인 해주세요
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-10 text-text-1'>
                  <div className='flex items-center mb-1'>
                    <div className='mr-2'>이메일</div>
                    {isEmailSentFailed && (
                      <div className='text-custom_red text-11 flex items-center'>
                        <div className='mr-1'>유효하지 않은 이메일이에요</div>
                      </div>
                    )}
                    {isEmailSentSuccess && (
                      <div className='text-blue-main text-11 flex items-center'>
                        <div className='mr-1'>이메일이 전송되었어요</div>
                      </div>
                    )}
                  </div>
                  <div className='flex relative'>
                    <input
                      type='email'
                      {...register('email', { required: true })}
                      placeholder='가입시 사용된 이메일을 입력해주세요'
                      className={`xl:w-72 w-80 h-12 px-4 py-2 border border-solid ${
                        isEmailEmpty
                          ? 'border-gray-300'
                          : isEmailSentSuccess
                          ? 'border-blue-main bg-blue-sub2'
                          : isEmailSentFailed
                          ? 'border-custom_red bg-red-50'
                          : 'border-gray-300'
                      } rounded-lg mb-7 placeholder:text-text-5 placeholder:text-14`}
                      onChange={() => {
                        setIsEmailSentSuccess(false);
                        setIsEmailSentFailed(false);
                      }}
                    />
                    {isEmailSentSuccess && (
                      <div className='absolute right-[12px] top-[12px]'>
                        <div>{svgCheckIcon3}</div>
                      </div>
                    )}
                    {isEmailSentFailed && (
                      <div className='absolute right-[12px] top-[12px]'>
                        <div>{svgWarning}</div>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type='submit'
                  disabled={!isValid}
                  className={`p-2 xl:w-72 w-80 h-[44px] ${
                    isValid ? 'bg-gradient-to-r from-blue-main to-gradi-3' : 'bg-blue-sub'
                  } rounded-full text-white`}>
                  비밀번호 전송
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPWPage;
