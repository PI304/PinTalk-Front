import Link from 'next/link';
import { useRouter } from 'next/router';
import { svgMessageOff, svgOut, svgPersonOff, svgPinTalkEmo2, svgSetting } from '@styles/svg';
import { ChildrenType } from 'types/base';
import { useAppDispatch } from '../../features/hooks';
import { useAppSelector } from '@features/hooks';
import { svgMessageOn, svgPersonOn } from '../../styles/svg';
import { useEffect } from 'react';
import { setEmail } from '@features/user/userSlice';

const AdminLayout = ({ children }: ChildrenType) => {
  const selector = useAppSelector;
  const email = selector((state) => state.user.email);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const isChatActive = router.pathname.includes('adminChat');
  const isProfileActive = router.pathname.includes('adminProfile');

  useEffect(() => {
    const storedData = sessionStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(setEmail(parsedData));
    }
  }, [dispatch]);

  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen'>
        <div className='bg-blue-main w-[180px] flex flex-col justify-between '>
          <div>
            <div className='font-Montserrat font-semibold  text-white text-21 mt-8 ml-7 flex '>
              PinTalk<div className=''>{svgPinTalkEmo2}</div>
            </div>
            <div className='text-white mt-30 flex flex-col mt-10 text-16 w-full'>
              <div>
                <Link href={`/adminChat/${encodeURIComponent(email)}`}>
                  <div
                    className={`flex items-center py-3 pl-7 ${isChatActive ? 'bg-blue-deep' : ''}`}>
                    <div className='mr-3'>{isChatActive ? svgMessageOn : svgMessageOff}</div>
                    <div>대화창</div>
                  </div>
                </Link>
                <Link href={`/adminProfile/${encodeURIComponent(email)}`}>
                  <div
                    className={`flex items-center py-3 pl-7 ${
                      isProfileActive ? 'bg-blue-deep' : ''
                    }`}>
                    <div className='mr-3'>{isProfileActive ? svgPersonOn : svgPersonOff}</div>내
                    정보
                  </div>
                </Link>
                <div className='flex items-center py-3 pl-7'>
                  <div className='mr-3'>{svgSetting}</div>
                  <div>환경설정</div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href='/login'
            className='flex items-center justify-center w-[100px] mx-auto text-white text-16 mb-10'>
            <div className='pr-3'>{svgOut}</div>
            <div>로그아웃</div>
          </Link>
        </div>
        <div className='bg-BG-2 w-[calc(100%-180px)]'>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
