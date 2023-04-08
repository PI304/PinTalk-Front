import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import { useAppDispatch } from '@features/hooks';
import { setEmail, setCodeValid } from '@features/user/userSlice';
import { svgCheckIcon3, svgWarning } from '@styles/svg';
import authApi from '@apis/auth/authApi';

type EmailFormData = {
  email: string;
};

const EmailForm = () => {
  const [checkEmail, setCheckEmail] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const dispatch = useAppDispatch();

  const { register, handleSubmit, watch } = useForm<EmailFormData>({
    mode: 'onBlur',
  });

  const email = watch('email');

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // useRef를 사용해 타이머 ID를 저장합니다.
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const handleEmailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    if (value !== email) {
      dispatch(setCodeValid(false));
    }

    // 이전에 설정된 타이머가 있다면 취소합니다.
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    // 0.5초 후에 API 요청을 실행하도록 타이머를 설정합니다.
    timerId.current = setTimeout(async () => {
      const response = await authApi.postCheckEmail({ email: value });
      if (isValidEmail(value) || value === '') {
        setEmailValid(true);
      } else if (!isValidEmail(value) && value !== '') {
        setEmailValid(false);
      }
      if (typeof response !== 'boolean' && value !== '') {
        setCheckEmail(true);
      } else {
        setCheckEmail(false);
      }
      if (value === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
    }, 1000);
  };

  const onSubmit = async (data: EmailFormData) => {
    dispatch(setCodeValid(false));
    try {
      const email = await authApi.postSendCode({ email: data.email });
      setIsEmailSent(true);
      dispatch(setEmail(data.email));
    } catch (e) {
      setEmailValid(false);
      setIsEmailSent(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex items-center mb-1'>
        <div className=' text-text-1 font-PretendardMedium mr-2'>이메일</div>
        {!emailValid && (
          <div className='text-custom_red text-11 flex items-center'>
            <div className='mr-1'>유효하지 않은 이메일이에요</div>
          </div>
        )}
        {emailValid && checkEmail && !isEmailSent && (
          <div className='text-blue-main text-11 flex items-center'>
            <div className='mr-1'>사용 가능한 이메일이에요</div>
          </div>
        )}
        {emailValid && checkEmail && isEmailSent && (
          <div className='text-blue-main text-11 flex items-center'>
            <div className='mr-1'>이메일이 전송되었어요</div>
          </div>
        )}
        {emailValid && !checkEmail && !isEmpty && (
          <div className='text-custom_red text-11 flex items-center'>
            <div className='mr-1'>이미 사용중인 이메일이에요</div>
          </div>
        )}
      </div>
      <div className='flex relative'>
        <input
          type='text'
          id='email'
          {...register('email', { required: true })}
          onChange={handleEmailChange}
          placeholder='이메일 형식에 맞게 입력해주세요'
          className={`md:w-[212px] w-80 h-12 px-3 py-2 border border-solid rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14 ${
            !emailValid || (!checkEmail && !isEmpty)
              ? 'border-custom_red bg-red-50'
              : checkEmail
              ? 'border-blue-main bg-blue-sub2'
              : 'border-gray-300 bg-white'
          }`}
        />
        {(!emailValid || (emailValid && !checkEmail && !isEmpty)) && (
          <div className='absolute right-[117px] top-[12px]'>
            <div>{svgWarning}</div>
          </div>
        )}
        {emailValid && checkEmail && (
          <div className='absolute right-[117px] top-[12px]'>
            <div>{svgCheckIcon3}</div>
          </div>
        )}
        <button
          disabled={!(emailValid && checkEmail)}
          type='submit'
          className='text-blue-main text-14 rounded-[10px] bg-blue-sub2 w-[100px] h-12 ml-2 font-PretendardMedium'>
          인증 코드 전송
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
