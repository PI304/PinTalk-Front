import { useState } from 'react';

type DeleteAccountPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteAccountPopup = ({ isOpen, onClose, onDelete }: DeleteAccountPopupProps) => {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onDelete();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-50' onClick={onClose} />
      <div className='bg-white py-10 px-20 rounded-lg z-20 flex flex-col justify-center items-center'>
        <div className='text-22 text-text-1 font-PretendardMedium mb-6'>계정 삭제</div>
        <div className='mb-10'>정말로 계정을 삭제하시겠습니까?</div>
        <div>
          <button
            onClick={handleSubmit}
            className='bg-custom_red  text-white rounded-full py-2 px-3 mr-3'>
            계정 삭제하기
          </button>
          <button onClick={onClose} className='bg-blue-main  text-white rounded-full py-2 px-3'>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPopup;
