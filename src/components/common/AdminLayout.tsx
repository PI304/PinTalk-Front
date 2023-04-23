import Link from 'next/link';
import { useRouter } from 'next/router';
import { svgMessageOff, svgOut, svgPersonOff, svgPinTalkEmoDark, svgSettingOff } from '@styles/svg';
import { ChildrenType } from 'types/base';
import { svgMessageOn, svgPersonOn } from '@styles/svg';
import { unsetAuthorHeader } from '@apis/_axios/instance';
import { useFetchUserId } from '@hooks/useFetchUserId';

const AdminLayout = ({ children }: ChildrenType) => {
  const router = useRouter();
  const isChatActive = router.pathname.includes('adminChat');
  const isProfileActive = router.pathname.includes('adminProfile');
  const isSettingActive = router.pathname.includes('adminSetting');
  const id = useFetchUserId();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    unsetAuthorHeader();
    localStorage.removeItem('pintalk_id');
    router.push('/login');
  };

  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen md:flex-col md:min-w-[400px]'>
        <div className='bg-blue-main md-min:min-w-[180px] flex flex-col justify-between '>
          <div>
            <div className='md:hidden font-Montserrat font-semibold  text-white text-21 mt-8 ml-7 flex '>
              PinTalk<div className=''>{svgPinTalkEmoDark}</div>
            </div>
            <div className='flex justify-between md-min:hidden bg-blac h-[80px] px-5'>
              <div className='font-Montserrat font-semibold  text-white text-21 flex items-center'>
                PinTalk<div className=''>{svgPinTalkEmoDark}</div>
              </div>
              <button
                onClick={handleLogout}
                className='flex items-center justify-center  text-white text-16  md-min:hidden'>
                <div className='pr-3'>{svgOut}</div>
                <div>로그아웃</div>
              </button>
            </div>
            <div className='flex flex-col mt-10 text-16 w-full md:hidden'>
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
              <Link href={`/adminSetting/${encodeURIComponent(id)}`}>
                <div
                  className={`flex items-center py-3 pl-7 ${
                    isSettingActive ? 'bg-blue-deep' : ''
                  }`}>
                  <div className='mr-3'>{isSettingActive ? svgSettingOff : svgSettingOff}</div>
                  <div className={`${isSettingActive ? 'text-white' : 'text-blue-sub'}`}>
                    환경설정
                  </div>
                </div>
              </Link>
            </div>
            <div className='text-16 w-full md:flex md-min:hidden'>
              <Link
                href={`/adminChat/${encodeURIComponent(id)}`}
                className='w-1/3 flex justify-center flex-col items-center'>
                <div className='flex items-center py-3'>
                  <div className='mr-3'>{isChatActive ? svgMessageOn : svgMessageOff}</div>
                  <div className={`${isChatActive ? 'text-white' : 'text-blue-sub'}`}>대화창</div>
                </div>
                <div
                  className={`bg-blue-deep h-[6px] w-full ${isChatActive ? '' : 'bg-transparent'}`}
                />
              </Link>
              <Link
                href={`/adminProfile/${encodeURIComponent(id)}`}
                className='w-1/3 flex justify-center flex-col items-center'>
                <div className='flex items-center py-3'>
                  <div className='mr-3'>{isProfileActive ? svgPersonOn : svgPersonOff}</div>
                  <div className={`${isProfileActive ? 'text-white' : 'text-blue-sub'}`}>
                    내 정보
                  </div>
                </div>
                <div
                  className={`bg-blue-deep h-[6px] w-full ${
                    isProfileActive ? '' : 'bg-transparent'
                  }`}
                />
              </Link>
              <Link
                href={`/adminSetting/${encodeURIComponent(id)}`}
                className='w-1/3 flex justify-center flex-col items-center'>
                <div className='flex items-center py-3 '>
                  <div className='mr-3'>{isSettingActive ? svgSettingOff : svgSettingOff}</div>
                  <div className={`${isSettingActive ? 'text-white' : 'text-blue-sub'}`}>
                    환경설정
                  </div>
                </div>
                <div
                  className={`bg-blue-deep h-[6px] w-full ${
                    isSettingActive ? '' : 'bg-transparent'
                  }`}
                />
              </Link>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className='flex items-center justify-center w-[100px] mx-auto text-white text-16 mb-10 md:hidden'>
            <div className='pr-3'>{svgOut}</div>
            <div>로그아웃</div>
          </button>
        </div>
        <div className='bg-BG-2 md-min:w-[calc(100%-180px)] md-min:min-w-[600px]'>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
