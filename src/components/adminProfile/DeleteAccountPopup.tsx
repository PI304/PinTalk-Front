import { AuthPassword } from '@apis/auth/authApi.type';
import useInput from '@hooks/useInput';
import { svgCheckIcon3, svgClose, svgWarning } from '@styles/svg';
import { useState } from 'react';

type DeleteAccountPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (data: AuthPassword) => void;
  passwordCorrect: boolean;
};

const DeleteAccountPopup = ({
  isOpen,
  onClose,
  onDelete,
  passwordCorrect,
}: DeleteAccountPopupProps) => {
  if (!isOpen) return null;
  const [showPassword, setShowPassword] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const { value: password, onChange: onChangePassword } = useInput();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;
    return regex.test(password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangePassword(event);
    const value = event.target.value.trim();
    if (validatePassword(value) || value === '') {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
    if (value === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-50' />
      <div className='bg-blue-sub2 border-2 border-blue-main  py-8 w-[480px] md:w-[340px] rounded-lg z-20 flex flex-col justify-center items-center relative'>
        <button onClick={onClose} className='absolute top-6 right-6'>
          {svgClose}
        </button>
        <div className='text-22 text-text-1 font-PretendardMedium mb-6'>계정 삭제</div>
        <div className='mb-7 text-center'>
          정말로 계정을 삭제하시겠어요?
          <br />
          삭제를 진행하시려면 비밀번호를 입력해주세요
          <br />
          <div className='text-text-4 text-14 md:text-12'>
            ( 7일 이내에 로그인시 복구가 가능해요 )
          </div>
        </div>
        <div className='mb-8 flex md-min:items-center md:flex-col'>
          <div className='text-16 font-PretendardMedium mr-4 md:ml-2 md:mb-1'>비밀번호 입력</div>
          <div className='relative'>
            <input
              id='Password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              className={`rounded-[10px] border h-[40px] w-[240px] px-3 text-text-5 text-12 focus:outline-none ${
                !passwordValid || !passwordCorrect
                  ? 'border-custom_red bg-red-50'
                  : password !== ''
                  ? 'border-blue-main bg-blue-sub2'
                  : 'border-border'
              } `}
              placeholder='현재 비밀번호를 입력해주세요'
              autoComplete='current-password'
            />
            <button
              type='button'
              onClick={toggleShowPassword}
              className='absolute right-[11px] top-[8px]'>
              {showPassword ? (
                <img width={24} src='/eye-closed.svg' alt='eye-closed' />
              ) : (
                <img width={24} src='/eye-open.svg' alt='eye-open' />
              )}
            </button>
            {(!passwordValid || !passwordCorrect) && (
              <div className='absolute right-[41px] top-[8px]'>
                <div>{svgWarning}</div>
              </div>
            )}
            {passwordValid && !isEmpty && passwordCorrect && (
              <div className='absolute right-[41px] top-[8px]'>
                <div>{svgCheckIcon3}</div>
              </div>
            )}
          </div>
        </div>
        <button
          disabled={!passwordValid || isEmpty}
          onClick={() => onDelete({ password })}
          className={`${
            !passwordValid || isEmpty ? 'bg-red_sub' : 'bg-custom_red'
          }  text-white md-min:text-16 rounded-full w-[150px] h-[43px] md:w-[130px] md:h-[40px]`}>
          계정 삭제하기
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountPopup;
