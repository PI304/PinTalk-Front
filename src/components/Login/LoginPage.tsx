import Link from 'next/link';
import { svgCheckIcon } from '@styles/svg';
import Slogan2 from '@components/common/Slogan2';
import { useRouter } from 'next/router';
import { AuthLogin } from '@apis/auth/authApi.type';
import authApi from '@apis/auth/authApi';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../features/hooks';
import { setData, setEmail, setPassword } from '@features/user/userSlice';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [saveEmail, setSaveEmail] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<{ email: string; password: string }>({
    mode: 'onChange',
  });

  const handleEmailSave = () => {
    setSaveEmail(!saveEmail);
  };
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setValue('email', savedEmail);
      setSaveEmail(true);
    }
  }, [setValue]);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const body: AuthLogin = { email: data.email, password: data.password };
      const response = await authApi.postLogin(body);
      dispatch(setData(response));
      dispatch(setEmail(data.email));
      dispatch(setPassword(data.password));
      sessionStorage.setItem('user', JSON.stringify(data.email));
      router.push(`/adminChat/${encodeURIComponent(data.email)}`);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <div className='flex lg:justify-center xl-min:justify-center xl:pl-10'>
      <Slogan2 />
      <div className='md-min:w-[calc(100%-1060px)] flex justify-center xl:mt-10'>
        <div className='xl-min:grid grid-rows-6'>
          <div className='row-span-1'></div>
          <div className='flex flex-col text-text-1 row-span-5'>
            <div className='xl:text-18 2xl:text-22 text-28 lg:hidden font-PretendardSemibold'>
              핀톡을 통해 어디서든 간편하고 쉽게
              <div className='mt-3 xl:mb-6 2xl:mb-10 mb-14'>나만의 대화창을 생성해보세요</div>
            </div>
            <div className='lg:flex lg:mt-28'>
              <div>
                <div className='font-Montserrat font-bold text-blue-main 2xl:text-30 text-38'>
                  LOGIN
                </div>
                <div className='text-text-3 mt-3'>반가워요! 이메일 계정을 통해 로그인 해주세요</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='mt-10 text-text-1 font-PretendardMedium'>
                    <div className='mb-1 '>이메일</div>
                    <input
                      {...register('email', { required: true })}
                      type='email'
                      id='email'
                      placeholder='이메일을 입력해주세요'
                      className='xl:w-72 w-80 h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                    />
                    <div className='mb-1'>비밀번호</div>
                    <input
                      {...register('password', { required: true })}
                      type='password'
                      id='password'
                      placeholder='비밀번호를 입력해주세요'
                      className='xl:w-72 w-80 h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-6 placeholder:text-text-5 placeholder:text-14'
                    />
                  </div>
                  <button
                    type='submit'
                    disabled={!isValid}
                    className={`p-2 xl:w-72 w-80 h-[44px] ${
                      isValid ? 'bg-gradient-to-r from-blue-main to-gradi-3' : 'bg-blue-sub'
                    } rounded-full text-white`}>
                    로그인
                  </button>
                </form>
                <div className='flex justify-between xl:w-72 w-80 mt-4 text-text-4 text-12'>
                  <div
                    className='flex font-PretendardMedium cursor-pointer'
                    onClick={handleEmailSave}>
                    {saveEmail ? svgCheckIcon : null}&nbsp; 이메일 저장
                  </div>
                  <div>
                    <Link href='/findpw'>비밀번호 찾기</Link> &nbsp;|&nbsp;{' '}
                    <Link href='/signup'>회원가입 하기</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
