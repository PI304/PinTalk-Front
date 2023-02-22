import useInput from '../../hooks/useInput';
import Link from 'next/link';

export const SignUpPage = () => {
  const { value: email, onChange: onChangeEmail } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();

  return (
    <div className='flex justify-center items-center '>
      <div className=''>
        <div className='text-center mt-28'>
          <div className='font-Montserrat font-bold text-blue-main text-38'>SIGN UP</div>
          <div className='text-text-3 mt-3'>환영합니다! 핀톡과 함께 편리한 대화, 시작해보세요</div>
        </div>
        <div className='box-border bg-white w-[636px] h-[578px] shadow-custom rounded-[10px] flex justify-center items-center mt-10'>
          <div>
            <div className='mt-10 text-text-5'>
              <div>
                <div className='mb-1 text-text-1'>이메일</div>
                <div>
                  <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={onChangeEmail}
                    placeholder='이메일 형식에 맞게 입력해주세요'
                    className='w-80 h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                  />
                  <button className='text-blue-main text-14 rounded-[10px] bg-blue-sub2 w-[100px] h-12 ml-2'>
                    인증 코드 전송
                  </button>
                </div>
              </div>
              <div>
                <div className='mb-1 text-text-1'>인증 코드 입력</div>
                <div>
                  <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={onChangeEmail}
                    placeholder='이메일로 전송된 인증 코드를 입력해주세요'
                    className='w-80 h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
                  />
                  <button className='text-blue-main text-14 rounded-[10px] bg-blue-sub2 w-[100px] h-12 ml-2'>
                    인증 코드 확인
                  </button>
                </div>
              </div>
              <div className='mb-1 text-text-1'>비밀번호</div>
              <input
                type='email'
                id='email'
                value={password}
                onChange={onChangePassword}
                placeholder='8~16자 이내 영문, 숫자, 특수문자 혼합'
                className='w-full h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-6 placeholder:text-text-5 placeholder:text-14'
              />
              <div className='mb-1 text-text-1'>비밀번호 확인</div>
              <input
                type='email'
                id='email'
                value={password}
                onChange={onChangePassword}
                placeholder='비밀번호를 다시 입력해주세요'
                className='w-full h-12 px-4 py-2 border border-solid border-gray-300 rounded-lg mb-6 placeholder:text-text-5 placeholder:text-14'
              />
            </div>
            <div>
              {email === '' || password === '' ? (
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
  );
};
