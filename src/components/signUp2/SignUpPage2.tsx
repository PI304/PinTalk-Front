import { useState } from 'react';
import useInput from '../../hooks/useInput';
import Link from 'next/link';
import { svgCheckIcon2, svgCheckIcon3, svgWarning } from '@styles/svg';
import { useAppDispatch } from '../../features/hooks';
import { setPassword } from '@features/user/userSlice';
import { useAppSelector } from '@features/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignUpPage2 = () => {
  const userState = useAppSelector((state: any) => state.user);
  console.log(userState);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const dispatch = useAppDispatch();

  const { value: passWord, onChange: onChangePassWord } = useInput();
  const { value: passWordCheck, onChange: onChangePassWordCheck } = useInput();

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;
    return regex.test(password);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangePassWord(event);
    const value = event.target.value.trim();
    if (validatePassword(value) || value === '') {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
    if (value === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const onButtonClick = () => {
    dispatch(setPassword(passWordCheck));
  };

  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      localStorage.setItem('previousURL', '');
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const previousURL = localStorage.getItem('previousURL');
      const currentURL = window.location.href;
      console.log('prev');
      console.log(previousURL);
      console.log('cur');
      console.log(currentURL);

      if (previousURL === currentURL) {
        router.replace('/signup');
        localStorage.setItem('previousURL', '');
      } else {
        localStorage.setItem('previousURL', currentURL);
      }
    }
  }, [router]);

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
            <div className='md:mt-4 text-text-5'>
              <div>
                <div className='flex items-center mb-1'>
                  <div className=' text-text-1 font-PretendardMedium  mr-2'>비밀번호</div>
                  {!passwordValid && (
                    <div className='text-custom_red text-11 flex items-center'>
                      <div className='mr-1'>
                        8~16자리 / 영문, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요
                      </div>
                    </div>
                  )}
                  {passwordValid && !isEmpty && (
                    <div className='text-blue-main text-11 flex items-center'>
                      <div className='mr-1'>사용가능한 비밀번호에요</div>
                    </div>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='PassWord'
                    value={passWord}
                    onChange={handlePasswordChange}
                    placeholder='8~16자리 / 영문, 숫자, 특수문자 조합'
                    className={`md:w-[320px] w-[392px] h-12 px-4 py-2 border border-solid ${
                      !passwordValid
                        ? 'border-custom_red bg-red-50'
                        : passWord !== ''
                        ? 'border-blue-main bg-blue-sub2'
                        : 'border-gray-300'
                    } rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14`}
                  />
                  <button
                    type='button'
                    onClick={toggleShowPassword}
                    className='absolute right-[11px] top-[12px]'>
                    {showPassword ? (
                      <img width={24} src='/eye-closed.svg' alt='eye-closed' />
                    ) : (
                      <img width={24} src='/eye-open.svg' alt='eye-open' />
                    )}
                  </button>
                  {!passwordValid && (
                    <div className='absolute right-[41px] top-[12px]'>
                      <div>{svgWarning}</div>
                    </div>
                  )}
                  {passwordValid && !isEmpty && (
                    <div className='absolute right-[41px] top-[12px]'>
                      <div>{svgCheckIcon3}</div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>비밀번호 확인</div>
                <div className='relative'>
                  <input
                    type={showPassword2 ? 'text' : 'password'}
                    id='PassWordCheck'
                    value={passWordCheck}
                    onChange={onChangePassWordCheck}
                    placeholder='비밀번호를 다시 입력해주세요'
                    className={`md:w-[320px] w-[392px] h-12 px-4 py-2 border border-solid ${
                      (passWord !== passWordCheck && passWordCheck !== '') ||
                      (!passwordValid && passWordCheck !== '')
                        ? 'border-custom_red bg-red-50'
                        : passWord === passWordCheck && passWordCheck !== ''
                        ? 'border-blue-main bg-blue-sub2'
                        : 'border-gray-300'
                    } rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14`}
                  />
                  <button
                    type='button'
                    onClick={toggleShowPassword2}
                    className='absolute right-[11px] top-[12px] '>
                    {showPassword2 ? (
                      <img width={24} src='/eye-closed.svg' alt='eye-closed' />
                    ) : (
                      <img width={24} src='/eye-open.svg' alt='eye-open' />
                    )}
                  </button>
                  {((passWord !== passWordCheck && passWordCheck !== '') ||
                    (!passwordValid && passWordCheck !== '')) && (
                    <div className='absolute right-[41px] top-[12px]'>
                      <div>{svgWarning}</div>
                    </div>
                  )}
                  {passWord === passWordCheck &&
                    passWordCheck !== '' &&
                    passwordValid &&
                    passWordCheck !== '' && (
                      <div className='absolute right-[41px] top-[12px]'>
                        <div>{svgCheckIcon3}</div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className='md:mt-2 mt-6 flex justify-end md:w-[300px] w-[580px]'>
            {passWord === '' ||
            passWordCheck === '' ||
            passWord !== passWordCheck ||
            !passwordValid ? (
              <div className='p-2 md:w-[75px] w-[94px] h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
                다음
              </div>
            ) : (
              <Link href='./signup3'>
                <button
                  type='button'
                  onClick={onButtonClick}
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

export default SignUpPage2;
