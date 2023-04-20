import Link from 'next/link';
import { useRouter } from 'next/router';
import { svgMessageOff, svgOut, svgPersonOff, svgPinTalkEmoDark, svgSetting } from '@styles/svg';
import { ChildrenType } from 'types/base';
import { svgMessageOn, svgPersonOn } from '@styles/svg';
import { unsetAuthorHeader } from '@apis/_axios/instance';
import { useFetchUserId } from '@hooks/useFetchUserId';

const AdminLayout = ({ children }: ChildrenType) => {
  const router = useRouter();
  const isChatActive = router.pathname.includes('adminChat');
  const isProfileActive = router.pathname.includes('adminProfile');
  const id = useFetchUserId();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    unsetAuthorHeader();
    localStorage.removeItem('pintalk_id');
    router.push('/login');
  };

  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen'>
        <div className='bg-blue-main min-w-[180px] flex flex-col justify-between '>
          <div>
            <div className='font-Montserrat font-semibold  text-white text-21 mt-8 ml-7 flex '>
              PinTalk<div className=''>{svgPinTalkEmoDark}</div>
            </div>
            <div className=' mt-30 flex flex-col mt-10 text-16 w-full'>
              <div>
                <Link href={`/adminChat/${encodeURIComponent(id)}`}>
                  <div
                    className={`flex items-center py-3 pl-7 ${isChatActive ? 'bg-blue-deep' : ''}`}>
                    <div className='mr-3'>{isChatActive ? svgMessageOn : svgMessageOff}</div>
                    <div className={`${isChatActive ? 'text-white' : 'text-blue-sub'}`}>대화창</div>
                  </div>
                </Link>
                <Link href={`/adminProfile/${encodeURIComponent(id)}`}>
                  <div
                    className={`flex items-center py-3 pl-7 ${
                      isProfileActive ? 'bg-blue-deep' : ''
                    }`}>
                    <div className='mr-3'>{isProfileActive ? svgPersonOn : svgPersonOff}</div>
                    <div className={`${isProfileActive ? 'text-white' : 'text-blue-sub'}`}>
                      내 정보
                    </div>
                  </div>
                </Link>
                <div className='flex items-center py-3 pl-7'>
                  <div className='mr-3'>{svgSetting}</div>
                  <div className='text-blue-sub'>환경설정</div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className='flex items-center justify-center w-[100px] mx-auto text-white text-16 mb-10'>
            <div className='pr-3'>{svgOut}</div>
            <div>로그아웃</div>
          </button>
        </div>
        <div className='bg-BG-2 w-[calc(100%-180px)] min-w-[600px]'>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
