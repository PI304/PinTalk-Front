const Slogan = () => {
  return (
    <div className='md:hidden flex justify-end  2xl:mt-40 mt-48 font-Montserrat w-[1060px] 2xl:w-[850px]'>
      <div className='gird grid-rows-2 2xl:w-[870px] w-[900px] '>
        <div className='ml-20'>
          <div className='flex items-center xl:text-60 2xl:text-70 text-80 text-blue-main font-bold'>
            Put
            <img className='mx-3 xl:w-[100px] 2xl:w-[140px]' src='/hand.svg' alt='hand' />
            <span className='text-white bg-blue-main rounded-full 2xl:py-1 2xl:px-9 px-11 py-3'>
              a pin
            </span>
            <img className='ml-3 xl:w-[100px] 2xl:w-[140px]' src='/pin.svg' alt='pin' />
          </div>
        </div>
        <div className='flex mt-6'>
          <div className='flex items-center xl:text-60 2xl:text-70 text-80 font-bold text-blue-main'>
            <div className='bg-blue-sub rounded-full 2xl:py-1 2xl:px-9 px-11 py-3'>anywhere!</div>
          </div>
          <img className='ml-3 xl:w-[100px] 2xl:w-[140px]' src='/world.svg' alt='world' />
        </div>
      </div>
    </div>
  );
};

export default Slogan;
