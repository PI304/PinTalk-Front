import useInput from '../../hooks/useInput';
import Link from 'next/link';
import { svgCheckIcon2 } from '../../styles/svg';
import authApi from '@apis/auth/authApi';
import { useAppSelector, useAppDispatch } from '@features/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { setData } from '@features/user/userSlice';

const SignUpPage3 = () => {
  const userState = useAppSelector((state: any) => state.user);
  console.log(userState);

  const { value: service_name, onChange: onChangeService_name } = useInput();
  const { value: service_domain, onChange: onChangeService_domain } = useInput();
  const { value: service_expl, onChange: onChangeService_expl } = useInput();
  const email = useAppSelector((state: any) => state.user.email);
  const password = useAppSelector((state: any) => state.user.password);

  const dispatch = useAppDispatch();

  const valid = (value: string) =>
    value === '' ? 'border-gray-300' : 'border-blue-main bg-blue-sub2';

  const onButtonClick = async () => {
    try {
      const userData = await authApi.postSignUp({
        email,
        service_name,
        service_expl,
        service_domain,
        password,
      });
      console.log(userData);
      dispatch(setData(userData));
      router.push('/signupfin');
    } catch (error) {
      router.push('/404');
    }
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
            핀톡을 이용하고자 하는 서비스의 정보를 입력해 주세요
            <br /> 입력한 정보는 언제든 수정이 가능해요
          </div>
        </div>
        <div className='flex justify-center items-center mt-6'>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-blue-main'>
            {svgCheckIcon2}
          </div>
          <div className='border-t-2 border-blue-main md:w-[64px] w-[98px] mx-2'></div>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-blue-main'>
            {svgCheckIcon2}
          </div>
          <div className='border-t-2 border-blue-main md:w-[64px] w-[98px] mx-2'></div>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-white'>
            <div className='text-blue-main text-16 font-PretendardSemibold'>3</div>
          </div>
        </div>
        <div className='text-text-2 text-14 flex justify-between md:px-[34px] px-[138px] mt-2 font-PretendardMedium'>
          <div>이메일 인증</div>
          <div>비밀번호 설정</div>
          <div>서비스 입력</div>
        </div>
        <div className='box-border bg-white md:w-[362px] w-[636px] md:h-[445px] h-[483px] shadow-custom rounded-[10px] flex flex-col justify-center items-center mt-10'>
          <div className='flex'>
            <div className='md:mt-2 text-text-5'>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>서비스 이름</div>
                <div>
                  <input
                    type='text'
                    id='Service_name'
                    value={service_name}
                    onChange={onChangeService_name}
                    placeholder='서비스 이름을 입력해주세요'
                    className={`md:w-[320px] w-[392px] h-12 px-4 py-2 border border-solid ${valid(
                      service_name,
                    )} rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14`}
                  />
                </div>
              </div>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>서비스 도메인</div>
                <div>
                  <input
                    type='text'
                    id='service_Domain'
                    value={service_domain}
                    onChange={onChangeService_domain}
                    placeholder='서비스 도메인 주소를 입력해주세요'
                    className={`md:w-[320px] w-[392px] h-12 px-4 py-2 border border-solid ${valid(
                      service_domain,
                    )}  rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14`}
                  />
                </div>
              </div>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>서비스 설명</div>
                <div>
                  <textarea
                    id='service_expl'
                    value={service_expl}
                    onChange={onChangeService_expl}
                    placeholder='서비스를 소개할 수 있는 설명을 입력해주세요'
                    className={`md:w-[320px] w-[392px] h-[102px] px-4 py-2 border border-solid  ${valid(
                      service_expl,
                    )}  rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14 overflow-auto`}
                  />
                </div>
              </div>
              <div>
                {service_name === '' || service_domain === '' || service_expl === '' ? (
                  <div className='p-2 w-full h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
                    회원가입
                  </div>
                ) : (
                  <button
                    onClick={onButtonClick}
                    type='button'
                    className='p-2 w-full h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
                    회원가입
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage3;
