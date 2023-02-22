import { svgCheckIcon } from '@/styles/svg';
import useInput from '../../hooks/useInput';
import Link from 'next/link';

export const FindPWPage = () => {
  const { value: email, onChange: onChangeEmail } = useInput();

  return (
    <div className='grid md-min:grid-cols-3'>
      <div className='col-span-2 md:hidden flex justify-center mt-52 font-Montserrat'>
        <div className='gird grid-rows-2 '>
          <div className='ml-20 mr-10'>
            <div className='flex items-center 2xl:text-70 text-80 text-blue-main font-bold'>
              Put
              <img className='mx-3 2xl:w-[140px]' src='/hand.svg' alt='hand' />
              <span className='text-white bg-blue-main rounded-full 2xl:py-2 2xl:px-9 px-11 py-5'>
                a pin
              </span>
              <img
                className='ml-3 2xl:w-[140px]'
                src='/pin.svg'
                alt='pin'
                width={168}
                height={30}
              />
            </div>
          </div>
          <div className='flex mt-6'>
            <div className='flex items-center 2xl:text-70 text-80 font-bold text-blue-main'>
              <div className='bg-blue-sub rounded-full 2xl:py-2 2xl:px-9 px-11 py-5'>anywhere!</div>
            </div>
            <img
              className='ml-3 2xl:w-[140px]'
              src='/world.svg'
              alt='world'
              width={168}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col text-text-1 '>
        <div className='md:flex md:justify-center md:mt-44 mt-60'>
          <div>
            <div className='font-PretendardSemibold text-28 text-text-1'>비밀번호 찾기</div>
            <div className='text-text-3 mt-5 text-16'>
              반가워요! 이메일 계정을 통해 로그인 해주세요
            </div>
            <div className='mt-10 text-text-1'>
              <div className='mb-1'>이메일</div>
              <input
                type='email'
                id='email'
                value={email}
                onChange={onChangeEmail}
                placeholder='가입시 사용된 이메일을 입력해주세요'
                className='w-80 h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-7 placeholder:text-text-5 placeholder:text-14'
              />
            </div>
            {email === '' ? (
              <button className='p-2 w-80 h-[44px] bg-blue-sub rounded-full text-white'>
                비밀번호 전송
              </button>
            ) : (
              <button className='p-2 w-80 h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
                비밀번호 전송
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
