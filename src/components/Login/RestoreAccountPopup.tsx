import { AuthEmail, AuthPassword } from '@apis/auth/authApi.type';
import { svgClose } from '@styles/svg';
import { useState } from 'react';

type RestoreAccountPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onRestore: (data: AuthEmail) => void;
  email: string;
};

const RestoreAccountPopup = ({ isOpen, onClose, onRestore, email }: RestoreAccountPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-50' />
      <div className='bg-blue-sub2 border-2 border-blue-main  py-8 w-[480px] md:w-[340px] rounded-lg z-20 flex flex-col justify-center items-center relative'>
        <button onClick={onClose} className='absolute top-6 right-6'>
          {svgClose}
        </button>
        <div className='text-22 text-text-1 font-PretendardMedium mb-6'>계정 삭제</div>
        <div className='mb-7 text-center'>
          계정을 복구하시겠어요?
          <br />
          복구 시 이메일로 임시 비밀번호가 전송돼요
          <br />
        </div>
        <button
          onClick={() => onRestore({ email })}
          className={`bg-gradient-to-r from-blue-main to-gradi-3 text-white md-min:text-16 rounded-full w-[150px] h-[43px] md:w-[130px] md:h-[40px]`}>
          계정 복구하기
        </button>
      </div>
    </div>
  );
};

export default RestoreAccountPopup;
