import userApi from '@apis/user/userApi';
import { useEffect, useState } from 'react';
import Switch from 'react-switch';

const AdminSettingPage = () => {
  const [isToggled2, setIsToggled2] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  const handleToggle = async (checked: boolean) => {
    setIsToggled(checked);
    localStorage.setItem('pintalk_online_status', JSON.stringify(checked));
    try {
      const userId = parseInt(localStorage.getItem('pintalk_id') || '0', 10);
      await userApi.patchUserConfigById({ id: userId }, { use_online_status: checked });
    } catch (error) {
      console.error('Failed to update online status:', error);
    }
  };

  const handleToggle2 = (checked: boolean) => {
    setIsToggled2(checked);
  };

  const toggleThemeMode = (mode: boolean) => {
    setThemeMode(!mode);
  };

  const saveOnlineStatus = (status: boolean) => {
    localStorage.setItem('pintalk_online_status', JSON.stringify(status));
  };

  const getOnlineStatus = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedStatus = window.localStorage.getItem('pintalk_online_status');
      return savedStatus !== null && savedStatus !== 'undefined'
        ? JSON.parse(savedStatus)
        : savedStatus;
    }
    return false;
  };

  const [isToggled, setIsToggled] = useState(getOnlineStatus() || false);

  useEffect(() => {
    const status = getOnlineStatus();
    setIsToggled(status);
  }, []);

  const userId: number =
    typeof window !== 'undefined' && window.localStorage
      ? parseInt(window.localStorage.getItem('pintalk_id') || '0', 10)
      : 0;

  useEffect(() => {
    if (userId) {
      userApi.patchUserConfigById({ id: userId }, { use_online_status: isToggled });
      saveOnlineStatus(isToggled);
    }
  }, [isToggled, userId]);

  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col w-[60%] md:w-[80%] items-center mt-24 md:mt-16'>
        <div className='flex flex-col w-full mb-8'>
          <div className='font-PretendardMedium text-18 text-blue-main mb-3 ml-4'>대화 설정</div>
          <div className='bg-white rounded-[16px] shadow-custom2 border-blue-sub border-2 py-9 flex flex-col items-center text-18 md:text-16'>
            <div className='flex justify-between w-[85%] mb-6 items-center'>
              <div className='font-PretendardMedium text-text-3'>온/오프라인 상태 표시</div>
              <Switch
                checked={isToggled}
                onChange={handleToggle}
                onColor='#2F80ED'
                offColor='#DEE4F3'
                uncheckedIcon={false}
                checkedIcon={false}
                height={35}
                width={60}
                handleDiameter={25}
              />
            </div>
            <div className='flex justify-between w-[85%] items-center'>
              <div className='font-PretendardMedium text-text-3'>메세지 수신 시 이메일 알림</div>
              <Switch
                checked={isToggled2}
                onChange={handleToggle2}
                onColor='#2F80ED'
                offColor='#DEE4F3'
                uncheckedIcon={false}
                checkedIcon={false}
                height={35}
                width={60}
                handleDiameter={25}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='font-PretendardMedium text-18 text-blue-main mb-3 ml-4'>화면 설정</div>
          <div className='bg-white rounded-[16px] shadow-custom2 border-blue-sub border-2 py-10 md:py-7 flex flex-col items-center'>
            <div className='flex justify-between w-[85%] items-center'>
              <div className='font-PretendardMedium text-text-3 text-18 md:text-16'>화면 모드</div>
              <div className='flex font-PretendardMedium md:text-14'>
                <button
                  className={`flex items-center rounded-l-[10px] px-4 md:px-3 py-3 md:py-2 ${
                    themeMode
                      ? 'bg-blue-main text-white'
                      : 'bg-BG-1 text-text-4 border-border-1 border-[0.5px]'
                  }`}
                  onClick={() => toggleThemeMode(themeMode)}>
                  라이트 모드
                </button>
                <button
                  className={`flex items-center rounded-r-[10px] px-4 md:px-3 py-3 md:py-2 ${
                    themeMode
                      ? 'bg-BG-1 text-text-4 border-border-1 border-[0.5px]'
                      : 'bg-blue-main text-white'
                  }`}
                  onClick={() => toggleThemeMode(themeMode)}>
                  다크 모드
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingPage;
