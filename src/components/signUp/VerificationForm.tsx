import { useForm } from 'react-hook-form';

type VerificationFormData = {
  verificationCode: string;
};

const VerificationForm = () => {
  const { register, handleSubmit } = useForm<VerificationFormData>({
    mode: 'onBlur',
  });

  const onSubmit = (data: VerificationFormData) => {
    // 인증 코드 폼 데이터를 처리하는 로직을 구현합니다.
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-1 text-text-1 font-PretendardMedium'>인증 코드 입력</div>
      <div className='flex'>
        <input
          type='text'
          id='verificationCode'
          {...register('verificationCode', { required: true })}
          placeholder='전송된 인증 코드를 입력해주세요'
          className='md:w-[212px] w-80 h-12 px-3 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
        />
        <button
          type='submit'
          className='text-blue-main text-14 rounded-[10px] bg-blue-sub2  w-[100px] h-12 ml-2 font-PretendardMedium'>
          인증 코드 확인
        </button>
      </div>
    </form>
  );
};

export default VerificationForm;
