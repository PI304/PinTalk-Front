import Link from 'next/link';
import { svgDots, svgMessage, svgOut, svgPinTalkEmo, svgSetting } from '@styles/svg';
import { ChildrenType } from 'types/base';
import { svgPerson } from '@styles/svg';

const AdminLayout = ({ children }: ChildrenType) => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen'>
        <div className='bg-blue-main w-[220px]'>
          <div className='font-Montserrat font-semibold  text-white text-21 mt-8 ml-9 flex'>
            PinTalk<div className=''>{svgPinTalkEmo}</div>
          </div>
          <div className='text-white mt-30 flex flex-col mt-10 text-17 w-full'>
            <div className='flex items-center py-3 bg-blue-deep pl-8'>
              <div className='mr-3'>{svgMessage}</div>
              <div>대화창</div>
            </div>
            <div className='flex items-center py-3 pl-8'>
              <div className='mr-3'>{svgPerson}</div>내 정보
            </div>
            <div className='flex items-center py-3 pl-8'>
              <div className='mr-3'>{svgSetting}</div>
              <div>환경설정</div>
            </div>
            <Link
              href='/login'
              className='flex items-center justify-center w-[100px] mx-auto mt-[640px]'>
              <div className='pr-3'>{svgOut}</div>
              <div>로그아웃</div>
            </Link>
          </div>
        </div>
        <div className='bg-BG-2 flex'>
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
            <div className='bg-white w-full'>sdskjfskdfkds</div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
