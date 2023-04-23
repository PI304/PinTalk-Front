import Link from 'next/link';
import EmailForm from './Emailform';
import VerificationForm from './VerificationForm';
import { useAppSelector } from '@features/hooks';
import { rootState } from 'types/userState';

const SignUpForm = () => {
  const isCodeValid = useAppSelector((state: rootState) => state.user.codeValid);
  const isEmailEmpty = useAppSelector((state: rootState) => state.user.isEmailEmpty);
  return (
    <div className='box-border bg-white md:w-[362px] w-[636px] md:h-[303px] h-[344px] shadow-custom rounded-[10px] flex flex-col justify-center items-center mt-10'>
      <EmailForm />
      <VerificationForm />
      <div className='md:mt-2 mt-6 flex justify-end md:w-[300px] w-[580px]'>
        {isCodeValid && !isEmailEmpty ? (
          <Link href='./signup2'>
            <button
              type='button'
              className=' p-2 md:w-[75px] w-[94px] h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
              다음
            </button>
          </Link>
        ) : (
          <div className='p-2 md:w-[75px] w-[94px] h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
            다음
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
