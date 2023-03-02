import useInput from '../../hooks/useInput';
import Link from 'next/link';
import { svgCheckIcon2 } from '../../styles/svg';

export const SignUpPage3 = () => {
  const { value: serviceName, onChange: onChangeServiceName } = useInput();
  const { value: domain, onChange: onChangeDomain } = useInput();
  const { value: description, onChange: onChangeDescription } = useInput();

  return (
    <div className='flex justify-center items-center '>
      <div className=''>
        <div className='text-center mt-20'>
          <div className='font-Montserrat font-bold text-blue-main text-38'>SIGN UP</div>
          <div className='text-text-3 mt-3'>
            핀톡에서 이용하고자 하는 서비스의 정보를 입력해 주세요
            <br /> 입력한 정보는 언제든 수정이 가능해요
          </div>
        </div>
        <div className='flex justify-center items-center mt-6'>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-blue-main'>
            {svgCheckIcon2}
          </div>
          <div className='border-t-2 border-blue-main w-[98px] mx-2'></div>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-blue-main'>
            {svgCheckIcon2}
          </div>
          <div className='border-t-2 border-blue-main w-[98px] mx-2'></div>
          <div className='border-2 border-blue-main rounded-full w-[34px] h-[34px] flex justify-center items-center bg-white'>
            <div className='text-blue-main text-16 font-PretendardSemibold'>3</div>
          </div>
        </div>
        <div className='text-text-6 text-14 flex justify-between px-[138px] mt-2 font-PretendardMedium'>
          <div className='text-text-2'>이메일 인증</div>
          <div className='text-text-2'>비밀번호 설정</div>
          <div>서비스 입력</div>
        </div>
        <div className='box-border bg-white w-[636px] h-[483px] shadow-custom rounded-[10px] flex flex-col justify-center items-center mt-10'>
          <div className='flex'>
            <div className=' text-text-5'>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>서비스 이름</div>
                <div>
                  <input
                    type='text'
                    id='ServiceName'
                    value={serviceName}
                    onChange={onChangeServiceName}
                    placeholder='서비스 이름을 입력해주세요'
                    className='w-[392px] h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                  />
                </div>
              </div>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>도메인</div>
                <div>
                  <input
                    type='text'
                    id='Domain'
                    value={domain}
                    onChange={onChangeDomain}
                    placeholder='서비스 도메인 주소를 입력해주세요'
                    className='w-[392px] h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                  />
                </div>
              </div>
              <div>
                <div className='mb-1 text-text-1 font-PretendardMedium'>서비스 설명</div>
                <div>
                  <textarea
                    id='description'
                    value={description}
                    onChange={onChangeDescription}
                    placeholder='서비스를 소개할 수 있는 설명을 입력해주세요'
                    className='w-[392px] h-[102px] px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14 overflow-auto'
                  />
                </div>
              </div>
              <div>
                {serviceName === '' || domain === '' || description === '' ? (
                  <div className='p-2 w-full h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
                    회원가입
                  </div>
                ) : (
                  <Link href='./signupfin'>
                    <button
                      type='button'
                      className='p-2 w-full h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
                      회원가입
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
