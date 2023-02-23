import Link from 'next/link';

export const SingUpFinPage = () => {
  return (
    <div className='flex flex-col items-center '>
      <div className='text-text-1 flex flex-col items-center md:mt-[240px] mt-40 text-24 2xl:mt-28'>
        <div>축하합니다! 회원가입이 완료되었어요</div>
        <div>
          지금 바로 <span className='font-PretendardBold'>로그인</span>하러 가볼까요?
        </div>
      </div>
      <Link href='/main'>
        <button className='rounded-full py-2 px-5 text-white text-22 bg-blue-main md:mt-12 mt-16 mb-32 2xl:mb-28'>
          로그인 하러 가기
        </button>
      </Link>
      <div className='md:hidden flex justify-center font-Montserrat'>
        <div className='ml-20 mr-10'>
          <div className='flex items-center 2xl:text-60 text-80 text-blue-main font-bold'>
            Put
            <img className='mx-3 2xl:w-[140px]' src='/hand.svg' alt='hand' />
            <span className='text-white bg-blue-main rounded-full 2xl:py-2 2xl:px-9 px-11 py-5'>
              a pin
            </span>
            <img className='ml-3 2xl:w-[140px]' src='/pin.svg' alt='pin' width={168} height={30} />
            <div className='flex items-center 2xl:text-60 text-80 font-bold text-blue-main'>
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
    </div>
  );
};
