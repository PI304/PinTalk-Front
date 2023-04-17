import userApi from '@apis/user/userApi';
import { svgCopyMini } from '@styles/svg';
import { rootState, userData } from 'types/userState';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@features/hooks';

const AdminProfilePage = () => {
  const [userData, setUserData] = useState<userData | null>(null);
  const id = useAppSelector((state: rootState) => state.user.id);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await userApi.getUserDataById({ id });
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const [profileName, setProfileName] = useState(userData?.profileName);
  const [email, setEmail] = useState(userData?.email);
  const [description, setDescription] = useState(userData?.description);
  const [serviceName, setServiceName] = useState(userData?.serviceName);
  const [serviceDomain, setServiceDomain] = useState(userData?.serviceDomain);
  const [serviceExpl, setServiceExpl] = useState(userData?.serviceExpl);

  useEffect(() => {
    if (userData) {
      setProfileName(userData.profileName);
      setEmail(userData.email);
      setDescription(userData.description);
      setServiceName(userData.serviceName);
      setServiceDomain(userData.serviceDomain);
      setServiceExpl(userData.serviceExpl);
    }
  }, [userData]);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleCompleteButtonClick = () => {
    setIsEditing(false);
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen pb-10 min-w-[930px] bg-BG-2 min-h-[750px]'>
      <div className='flex justify-end w-10/12 '>
        {!isEditing ? (
          <button
            className='bg-BG-1 text-text-4 font-PretendardMedium text-14 border-[0.5px] border-border rounded-[10px] py-2 px-4 mb-4'
            onClick={handleEditButtonClick}>
            수정하기
          </button>
        ) : (
          <button
            className='bg-BG-1 text-text-4 font-PretendardMedium text-14 border-[0.5px] border-border rounded-[10px] py-2 px-4 mb-4'
            onClick={handleCompleteButtonClick}>
            완료
          </button>
        )}
      </div>
      <div className='w-10/12 h-[35%] xl:h-[250px] bg-white rounded-lg shadow-custom2 mb-8 flex items-center justify-center  xl-min:min-h-[300px]'>
        <div className='w-10/12 h-4/5 flex'>
          <div className='w-3/12 flex flex-col justify-center items-center xl:mr-2'>
            <div className='rounded-full w-[173px] h-[173px] xl:w-[132px] xl:h-[132px] bg-[#D9D9D9] mb-5'></div>
            <button className='bg-BG-1 text-text-4 font-PretendardMedium text-13  border-[0.5px] border-border rounded-[10px] py-2 px-3'>
              사진 변경하기
            </button>
          </div>
          <div className='w-[30%] h-[70%] flex my-auto flex-col justify-between ml-10'>
            <div className='min-h-[60%] xl:min-h-[55%]'>
              <div className='mb-1 font-PretendardMedium xl:text-14 text-16 text-text-1'>
                프로필 이름
              </div>
              {isEditing ? (
                <input
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  placeholder='프로필 이름을 입력해주세요'
                  className='border-border border w-full rounded-[10px] h-[40px] xl:mb-3 p-3 xl:text-12 text-14 placeholder:text-text-5'
                />
              ) : (
                <div className='text-16 text-text-4 mt-2'>{profileName}</div>
              )}
            </div>
            <div className='min-h-[60%]'>
              <div className='mb-1 font-PretendardMedium xl:text-14 text-16 text-text-1'>
                이메일
              </div>
              {isEditing ? (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='이메일을 입력해주세요'
                  className='border-border border w-full rounded-[10px] h-[40px] xl:mb-3 p-3 xl:text-12 text-14 placeholder:text-text-5'
                />
              ) : (
                <div className='text-16 text-text-4 mt-2'>{email}</div>
              )}
            </div>
          </div>
          <div className='w-5/12 h-[70%] flex my-auto flex-col justify-center xl:ml-6 ml-8'>
            <div className='mb-1 font-PretendardMedium xl:text-14  text-16 text-text-1'>
              상태 메세지
            </div>
            {isEditing ? (
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='상태 메세지를 입력해주세요'
                className='border-border border rounded-[10px] h-full p-3 xl:text-12  text-14 placeholder:text-text-5'
              />
            ) : (
              <textarea className='h-full text-16 text-text-4' value={description} />
            )}
          </div>
        </div>
      </div>
      <div className='flex w-10/12 xl:h-[280px] h-2/5 xl-min:min-h-[320px]'>
        <div className='w-1/2 bg-white rounded-lg shadow-custom2 mr-8 py-5 flex flex-col '>
          <div className='font-PretendardMedium xl:text-12 text-14 text-text-4 xl:ml-6 ml-7'>
            서비스 설정
          </div>
          <div className='w-11/12 font-PretendardMedium xl:text-14 xl:pl-8 xl:pr-2 px-10 py-1 text-16 text-text-1h-full'>
            <div className={`flex my-3 items-center ${isEditing ? 'justify-between' : ''}`}>
              <div className='w-[110px] xl:w-[90px]'>서비스 이름</div>
              {isEditing ? (
                <input
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  placeholder='서비스 이름을 입력해주세요'
                  className='border-border border rounded-[10px] xl:h-[30px] h-[40px] xl:w-8/12 w-9/12 xl:p-2 p-3 xl:text-12  text-14 placeholder:text-text-5'
                />
              ) : (
                <div className='text-16 text-text-4 xl:h-[30px] h-[40px] flex items-center'>
                  {serviceName}
                </div>
              )}
            </div>
            <div className={`flex my-3 items-center ${isEditing ? 'justify-between' : ''}`}>
              <div className='w-[110px] xl:w-[90px]'>서비스 도메인</div>
              {isEditing ? (
                <input
                  value={serviceName}
                  onChange={(e) => setServiceDomain(e.target.value)}
                  placeholder='서비스 도메인 주소를 입력해주세요'
                  className='border-border border rounded-[10px] xl:h-[30px] h-[40px] xl:w-8/12 w-9/12 xl:p-2 p-3 xl:text-12 text-14 placeholder:text-text-5'
                />
              ) : (
                <div className='text-16 text-text-4 xl:h-[30px] h-[40px] flex items-center'>
                  {serviceDomain}
                </div>
              )}
            </div>
            <div className={`flex mt-3 h-3/5 ${isEditing ? 'justify-between' : ''}`}>
              <div className='w-[110px] xl:w-[90px]'>서비스 소개</div>
              {isEditing ? (
                <textarea
                  value={serviceExpl}
                  onChange={(e) => setServiceExpl(e.target.value)}
                  placeholder='서비스 소개를 입력해주세요'
                  className='border-border border rounded-[10px] min-h-[90px] h-full xl:w-8/12 w-9/12 xl:px-2 px-3 xl:py-1 py-2 xl:text-12 text-14 placeholder:text-text-5'
                />
              ) : (
                <textarea
                  readOnly={!isEditing}
                  className='text-14 text-text-4 min-h-[90px] h-full xl:w-8/12 w-[65%] '
                  value={serviceExpl}
                />
              )}
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='h-3/5 xl:h-[170px] bg-white rounded-lg shadow-custom2 py-5 flex flex-col'>
            <div className='font-PretendardMedium xl:text-12 text-14 text-text-4 xl:ml-6 ml-7'>
              계정 설정
            </div>
            <div className='font-PretendardMedium xl:text-14 xl:px-8 px-10 py-2 text-16 text-text-1'>
              <div className='flex my-4 items-center'>
                <div className='xl:w-[100px] w-[120px]'>Access Key</div>
                <div className='xl:mr-6 mr-12 w-1/2 overflow-auto'>{userData?.accessKey}</div>
                <button className='hover:bg-slate-100 hover:rounded-md p-1'>{svgCopyMini}</button>
              </div>
              <div className='flex mt-5 items-center'>
                <div className='xl:w-[100px] w-[120px]'>Secret Key</div>
                <div className='xl:mr-6 mr-12  w-1/2 overflow-auto '>{userData?.secretKey}</div>
                <button className='hover:bg-slate-100 hover:rounded-md p-1'>{svgCopyMini}</button>
              </div>
            </div>
          </div>
          <div className='my-6 xl:text-14 text-16'>
            <button className='bg-blue-main  text-white rounded-[10px] py-2 px-3 mr-4'>
              비밀번호 변경
            </button>
            <button className='text-text-4 border-[0.5px] border-border rounded-[10px] py-2 px-3'>
              계정 삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminProfilePage;
