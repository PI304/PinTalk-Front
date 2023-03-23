import { AdminEmail } from 'types/email';
import { svgDots } from '@styles/svg';

const AdminChatPage = ({ adminEmail }: AdminEmail) => {
  return (
    <div className='flex'>
      <div className='w-[520px] pt-10 px-10'>
        <div className='flex justify-between items-center text-18 text-text-3'>
          <div>최근 대화내역</div>
          <div>{svgDots}</div>
        </div>
        <div className='w-[440px] h-[100px] bg-white mt-4 rounded-xl flex items-center justify-between px-6'>
          <div className='flex items-center'>
            <img className='my-auto' src='/userImg.svg' alt='userImg' width={40} height={30} />
            <div className='ml-5'>
              <div className='font-PretendardSemibold text-text-2'>유저1</div>
              <div className='text-text-4 text-14'>메시지</div>
            </div>
          </div>
          <div className='text-text-6 text-12'>30분전</div>
        </div>
      </div>
      <div className='flex-1 flex justify-end'>
        <div className='bg-white w-full h-full'>sdskjfskdfkds</div>
      </div>
    </div>
  );
};

export default AdminChatPage;
