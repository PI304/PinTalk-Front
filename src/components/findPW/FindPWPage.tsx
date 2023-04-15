import useInput from '../../hooks/useInput';
import Slogan2 from '../common/Slogan2';

const FindPWPage = () => {
  const { value: email, onChange: onChangeEmail } = useInput();

  return (
    <div className='flex lg:justify-center xl-min:justify-center lg:pl-0 xl:pl-10'>
      <Slogan2 />
      <div className='lg-min:w-[calc(100%-1060px)] xl-min:w-[calc(100%-950px)] 2xl-min:w-[calc(100%-1060px)] flex justify-center'>
        <div className='flex flex-col text-text-1'>
          <div className='md:flex md:justify-center xl:mt-36 2xl:mt-52 mt-60'>
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
                  className='xl:w-72 w-80 h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-7 placeholder:text-text-5 placeholder:text-14'
                />
              </div>
              {email === '' ? (
                <button className='p-2 xl:w-72 w-80 h-[44px] bg-blue-sub rounded-full text-white'>
                  비밀번호 전송
                </button>
              ) : (
                <button className='p-2 xl:w-72 w-80 h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
                  비밀번호 전송
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPWPage;
