import Image from 'next/image';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[134px] mt-32'>
        <Image src='/404.svg' alt='404 image' width={134} height={134} priority />
      </div>
      <div className='font-Montserrat text-[52px] font-bold text-blue-main mt-4'>Error 404</div>
      <div className='text-22 font-PretendardRegular text-text-4 text-center mt-8'>
        페이지를 찾을 수 없습니다
        <br />
        다시 시도해 주세요
      </div>
      <Link href='/main'>
        <button
          type='submit'
          className='p-2  w-[170px] h-[44px]
              bg-gradient-to-r from-blue-main to-gradi-3
            rounded-full text-white text-16 mt-10'>
          메인페이지로 가기
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
