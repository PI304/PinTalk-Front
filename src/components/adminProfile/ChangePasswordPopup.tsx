import { AuthChangePw } from '@apis/auth/authApi.type';
import React, { useState } from 'react';
import useInput from '@hooks/useInput';
import { svgCheckIcon3, svgClose, svgWarning } from '@styles/svg';

interface ChangePasswordPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onChangePassword: (data: AuthChangePw) => void;
}

export const ChangePasswordPopup = ({
  isOpen,
  onClose,
  onChangePassword,
}: ChangePasswordPopupProps) => {
  const { value: currentPassword, onChange: onChangeCurrentPassword } = useInput();
  const { value: newPassword, onChange: onChangeNewPassword } = useInput();
  const { value: passwordCheck, onChange: onChangePasswordCheck } = useInput();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const toggleShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;
    return regex.test(password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeNewPassword(event);
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

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-50' />
      <div className='bg-blue-sub2 border-2 border-blue-main rounded-lg z-20 w-[530px] md:w-[340px] flex flex-col justify-center items-center py-8 md:py-6 relative'>
        <button onClick={onClose} className='absolute top-6 right-6'>
          {svgClose}
        </button>
        <div className='text-22 text-text-1 font-PretendardMedium mb-8'>비밀번호 변경</div>
        <div className='mb-8 md:mb-4 flex md-min:items-center md:flex-col'>
          <div className='text-16 font-PretendardMedium md-min:w-[115px] md:ml-2 md:mb-1'>
            현재 비밀번호
          </div>
          <div className='relative'>
            <input
              id='currentPassword'
              type={showPassword ? 'text' : 'password'}
              className='border-border rounded-[10px] border h-[40px] w-[240px] px-3 text-text-5 text-12'
              placeholder='현재 비밀번호를 입력해주세요'
              value={currentPassword}
              onChange={onChangeCurrentPassword}
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
          </div>
        </div>
        <div className='mb-3 flex md-min:items-center md:flex-col'>
          <div className='text-16 font-PretendardMedium w-[115px] md:ml-2 md:mb-1'>
            새로운 비밀번호
          </div>
          <div className='relative'>
            <input
              id='newPassword'
              type={showPassword2 ? 'text' : 'password'}
              className={`rounded-[10px] border h-[40px] w-[240px] px-3 text-text-5 text-12 ${
                !passwordValid
                  ? 'border-custom_red bg-red-50'
                  : newPassword !== ''
                  ? 'border-blue-main bg-blue-sub2'
                  : 'border-border'
              } `}
              placeholder='8~16자리 / 영문, 숫자, 특수문자 조합'
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <button
              type='button'
              onClick={toggleShowPassword2}
              className='absolute right-[11px] top-[8px]'>
              {showPassword2 ? (
                <img width={24} src='/eye-closed.svg' alt='eye-closed' />
              ) : (
                <img width={24} src='/eye-open.svg' alt='eye-open' />
              )}
            </button>
            {!passwordValid && (
              <div className='absolute right-[41px] top-[8px]'>
                <div>{svgWarning}</div>
              </div>
            )}
            {passwordValid && !isEmpty && (
              <div className='absolute right-[41px] top-[8px]'>
                <div>{svgCheckIcon3}</div>
              </div>
            )}
          </div>
        </div>
        <div className='mb-8 flex md-min:items-center md:flex-col'>
          <div className='text-16 font-PretendardMedium w-[115px] md:ml-2 md:mb-1'>
            비밀번호 확인
          </div>
          <div className='relative'>
            <input
              id='passwordCheck'
              type={showPassword3 ? 'text' : 'password'}
              className={`rounded-[10px] border h-[40px] w-[240px] px-3 text-text-5 text-12 ${
                (newPassword !== passwordCheck && passwordCheck !== '') ||
                (!passwordValid && passwordCheck !== '')
                  ? 'border-custom_red bg-red-50'
                  : newPassword === passwordCheck && passwordCheck !== ''
                  ? 'border-blue-main bg-blue-sub2'
                  : 'border-border'
              }`}
              placeholder='비밀번호를 다시 입력해주세요'
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            <button
              type='button'
              onClick={toggleShowPassword3}
              className='absolute right-[11px] top-[8px]'>
              {showPassword3 ? (
                <img width={24} src='/eye-closed.svg' alt='eye-closed' />
              ) : (
                <img width={24} src='/eye-open.svg' alt='eye-open' />
              )}
            </button>
            {((newPassword !== passwordCheck && passwordCheck !== '') ||
              (!passwordValid && passwordCheck !== '')) && (
              <div className='absolute right-[41px] top-[8px]'>
                <div>{svgWarning}</div>
              </div>
            )}
            {newPassword === passwordCheck &&
              passwordCheck !== '' &&
              passwordValid &&
              passwordCheck !== '' && (
                <div className='absolute right-[41px] top-[8px]'>
                  <div>{svgCheckIcon3}</div>
                </div>
              )}
          </div>
        </div>
        <button
          onClick={() => onChangePassword({ currentPassword, newPassword })}
          className='bg-gradient-to-r from-blue-main to-gradi-3 text-white md-min:text-16 font-PretendardMedium flex items-center justify-center rounded-[50px] w-[130px] h-[43px] md:w-[110px] md:h-[40px]'>
          변경하기
        </button>
      </div>
    </div>
  );
};
