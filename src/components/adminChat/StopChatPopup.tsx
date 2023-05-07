import { svgClose } from '@styles/svg';

type StopChatPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onStop: () => void;
};

const StopChatPopup = ({ isOpen, onClose, onStop }: StopChatPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
      <div className='fixed inset-0 bg-black bg-opacity-50' />
      <div className='bg-white py-8 w-[480px] md:w-[340px] rounded-lg z-20 flex flex-col justify-center items-center relative'>
        <button onClick={onClose} className='absolute top-6 right-6'>
          {svgClose}
        </button>
        <div className='text-22 text-text-1 font-PretendardMedium mb-6'>대화 종료하기</div>
        <div className='mb-7 text-center'>
          대화를 종료할까요?
          <br />
          종료된 대화는 언제든 다시 재개할 수 있어요
        </div>
        <button
          onClick={onStop}
          className='bg-gradient-to-r from-blue-main to-gradi-3 text-white md-min:text-16 rounded-full w-[150px] h-[43px] md:w-[130px] md:h-[40px]'>
          대화 종료하기
        </button>
      </div>
    </div>
  );
};

export default StopChatPopup;
