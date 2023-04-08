import { useForm } from 'react-hook-form';
import authApi from '@apis/auth/authApi';
import { useAppDispatch, useAppSelector } from '@features/hooks';
import { rootState } from 'types/userState';
import { setCodeValid } from '@features/user/userSlice';
import { useState, useEffect } from 'react';
import { svgWarning, svgCheckIcon3 } from '@styles/svg';
import { useRouter } from 'next/router';

type VerificationFormData = {
  verificationCode: string;
};

const VerificationForm = () => {
  const { register, handleSubmit, watch } = useForm<VerificationFormData>({
    mode: 'onBlur',
  });
  const dispatch = useAppDispatch();
  const isCodeValid = useAppSelector((state: rootState) => state.user.codeValid);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeRight, setIsCodeRight] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRefresh = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      dispatch(setCodeValid(false));
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCodeValid(false));
  }, [router.asPath, dispatch]);

  const onSubmit = async (data: VerificationFormData) => {
    setIsButtonClicked(true);
    try {
      const response = await authApi.postCodeConfirm({ verificationCode: data.verificationCode });
      dispatch(setCodeValid(true));
      setIsCodeRight(false);
      setIsCodeSent(false);
    } catch (e: any) {
      console.log(e);
      dispatch(setCodeValid(false));
      if (e.response?.status === 422) {
        setIsCodeSent(true);
        setIsCodeRight(false);
      } else {
        setIsCodeRight(true);
        setIsCodeSent(false);
      }
    }
  };
  const verificationCode = watch('verificationCode');

  const inputStyle =
    !isCodeValid && (isCodeSent || isCodeRight)
      ? 'border-custom_red bg-red-50'
      : isButtonClicked && isCodeValid
      ? 'border-blue-main bg-blue-sub2'
      : 'border-gray-300 bg-white';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex items-center mb-1'>
        <div className='text-text-1 font-PretendardMedium mr-2'>인증 코드 입력</div>
        {!isCodeValid && isCodeSent && !isCodeRight && (
          <div className='text-custom_red text-11 flex items-center'>
            <div className='mr-1'>인증 코드를 먼저 전송해주세요</div>
          </div>
        )}
        {!isCodeValid && !isCodeSent && isCodeRight && (
          <div className='text-custom_red text-11 flex items-center'>
            <div className='mr-1'>인증 코드가 올바르지 않아요</div>
          </div>
        )}
        {isCodeValid && !isCodeSent && !isCodeRight && (
          <div className='text-blue-main text-11 flex items-center'>
            <div className='mr-1'>인증 코드가 확인되었어요</div>
          </div>
        )}
      </div>
      <div className='flex relative'>
        <input
          type='text'
          id='verificationCode'
          {...register('verificationCode', { required: true })}
          placeholder='전송된 인증 코드를 입력해주세요'
          className={`md:w-[212px] w-80 h-12 px-3 py-2 border border-solid  rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14 ${inputStyle}`}
        />
        {!isCodeValid && (isCodeSent || isCodeRight) ? (
          <div className='absolute right-[117px] top-[12px]'>
            <div>{svgWarning}</div>
          </div>
        ) : isButtonClicked && isCodeValid ? (
          <div className='absolute right-[117px] top-[12px]'>
            <div>{svgCheckIcon3}</div>
          </div>
        ) : null}
        <button
          type='submit'
          disabled={!verificationCode}
          className={`text-blue-main text-14 rounded-[10px] w-[100px] h-12 ml-2 font-PretendardMedium bg-blue-sub2`}>
          인증 코드 확인
        </button>
      </div>
    </form>
  );
};

export default VerificationForm;
