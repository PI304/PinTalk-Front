import { chatId } from '@apis/chat/chatApti.type';
import { svgClose } from '@styles/svg';

type DeleteChatPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: chatId) => void;
  id: number;
};

const DeleteChatPopup = ({ isOpen, onClose, onDelete, id }: DeleteChatPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-50' />
      <div className='bg-white py-8 w-[480px] md:w-[340px] rounded-lg z-20 flex flex-col justify-center items-center relative'>
        <button onClick={onClose} className='absolute top-6 right-6'>
          {svgClose}
        </button>
        <div className='text-22 text-text-1 font-PretendardMedium mb-6'>대화창 나가기</div>
        <div className='mb-7 text-center'>
          대화창을 나가고 싶으신가요?
          <br />
          한번 나간 대화창은 다시 들어올 수 없어요
        </div>
        <button
          onClick={() => onDelete({ id })}
          className='bg-custom_red text-white md-min:text-16 rounded-full w-[150px] h-[43px] md:w-[130px] md:h-[40px]'>
          대화창 나가기
        </button>
      </div>
    </div>
  );
};

export default DeleteChatPopup;
