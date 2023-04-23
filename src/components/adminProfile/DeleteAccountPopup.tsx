import useInput from '@hooks/useInput';
import { svgClose } from '@styles/svg';
import { useState } from 'react';

type DeleteAccountPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteAccountPopup = ({ isOpen, onClose, onDelete }: DeleteAccountPopupProps) => {
  if (!isOpen) return null;
  const [showPassword, setShowPassword] = useState(false);
  const { value: passWord, onChange: onChangePassWord } = useInput();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
          정말로 계정을 삭제하시겠습니까?
          <br />
          삭제를 진행하시려면 비밀번호를 입력해주세요
        </div>
        <div className='mb-8 flex md-min:items-center md:flex-col'>
          <div className='text-16 font-PretendardMedium mr-4 md:ml-2 md:mb-1'>비밀번호 입력</div>
          <div className='relative'>
            <input
              id='Password'
              type={showPassword ? 'text' : 'password'}
              value={passWord}
              onChange={onChangePassWord}
              className='border-border rounded-[10px] border h-[40px] w-[240px] px-3 text-text-5 text-12'
              placeholder='현재 비밀번호를 입력해주세요'
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
        <button
          onClick={onDelete}
          className='bg-custom_red  text-white md-min:text-16 rounded-full w-[150px] h-[43px] md:w-[130px] md:h-[40px]'>
          계정 삭제하기
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountPopup;
