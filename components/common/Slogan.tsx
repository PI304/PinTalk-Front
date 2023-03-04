export const Slogan = () => {
  return (
    <div className='md:hidden flex justify-end mt-48 font-Montserrat w-[1060px]'>
      <div className='gird grid-rows-2 w-[900px]'>
        <div className='ml-20'>
          <div className='flex items-center 2xl:text-70 text-80 text-blue-main font-bold'>
            Put
            <img className='mx-3 2xl:w-[140px]' src='/hand.svg' alt='hand' />
            <span className='text-white bg-blue-main rounded-full 2xl:py-2 2xl:px-9 px-11 py-5'>
              a pin
            </span>
            <img className='ml-3 2xl:w-[140px]' src='/pin.svg' alt='pin' />
          </div>
        </div>
        <div className='flex mt-6'>
          <div className='flex items-center 2xl:text-70 text-80 font-bold text-blue-main'>
            <div className='bg-blue-sub rounded-full 2xl:py-2 2xl:px-9 px-11 py-5'>anywhere!</div>
          </div>
          <img className='ml-3 2xl:w-[140px]' src='/world.svg' alt='world' />
        </div>
      </div>
    </div>
  );
};
