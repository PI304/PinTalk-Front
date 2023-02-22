import { svgCheckIcon } from '@/styles/svg';
import useInput from '../../hooks/useInput';
import Link from 'next/link';

export const MainPage = () => {
  const { value: email, onChange: onChangeEmail } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();

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
        <div className=' mt-28 text-28 md:hidden'>
          핀톡을 통해 <span className='font-PretendardBold'>어디서든 간편하고 쉽게</span>
          <div className='mt-3 mb-14'>
            <span className='font-PretendardBold'>나만의 대화창</span>을 생성해보세요
          </div>
        </div>
        <div className='md:flex md:justify-center md:mt-32 '>
          <div>
            <div className='font-Montserrat font-bold text-blue-main text-38'>LOGIN</div>
            <div className='text-text-3 mt-3'>반가워요! 이메일 계정을 통해 로그인 해주세요</div>
            <div className='mt-10 text-text-1 font-PretendardMedium'>
              <div className='mb-1 '>이메일</div>
              <input
                type='email'
                id='email'
                value={email}
                onChange={onChangeEmail}
                placeholder='이메일을 입력해주세요'
                className='w-80 h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
              />
              <div className='mb-1'>비밀번호</div>
              <input
                type='password'
                id='password'
                value={password}
                onChange={onChangePassword}
                placeholder='비밀번호를 입력해주세요'
                className='w-80 h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-6 placeholder:text-text-5 placeholder:text-14'
              />
            </div>
            {email === '' || password === '' ? (
              <div className='p-2 w-80 h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
                로그인
              </div>
            ) : (
              <button className='p-2 w-80 h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
                로그인
              </button>
            )}
            <div className='flex justify-between w-80 mt-4 text-text-4 text-12'>
              <div className='flex font-PretendardMedium'>{svgCheckIcon}&nbsp; 이메일 저장</div>
              <div>
                <Link href='/findpw'>비밀번호 찾기</Link> &nbsp;|&nbsp;{' '}
                <Link href='/signup'>회원가입 하기</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
