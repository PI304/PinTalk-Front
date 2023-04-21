import userApi from '@apis/user/userApi';
import { svgCopyMini, svgPinTalkEmoPlaceBig, svgPinTalkEmoPlaceSmall } from '@styles/svg';
import { userData } from 'types/userState';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserImage, UserProfile } from '@apis/user/userApi.type';
import { useRouter } from 'next/router';
import { unsetAuthorHeader } from '@apis/_axios/instance';
import { useFetchUserId } from '@hooks/useFetchUserId';
import authApi from '@apis/auth/authApi';
import DeleteAccountPopup from './DeleteAccountPopup';

const AdminProfilePage = () => {
  const [userData, setUserData] = useState<userData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const id = useFetchUserId();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      profileName: '',
      description: '',
      serviceName: '',
      serviceDomain: '',
      serviceExpl: '',
    },
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userApi.getUserDataById({ id });
        setUserData(data);
      } catch (e) {
        router.push('/404');
        localStorage.removeItem('access_token');
        document.cookie = 'pintalk_refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        unsetAuthorHeader();
      }
    };
    if (id && id !== 0) {
      fetchUserData();
    }
  }, [id]);

  useEffect(() => {
    if (userData) {
      setValue('profileName', userData.profileName);
      setValue('description', userData.description);
      setValue('serviceName', userData.serviceName);
      setValue('serviceDomain', userData.serviceDomain);
      setValue('serviceExpl', userData.serviceExpl);
    }
  }, [userData, setValue]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const userImage: UserImage = {
        profileImage: file,
      };
      try {
        const updatedData = await userApi.patchUserImageById({ id }, userImage);
        setUserData(updatedData);
        console.log(userData);
      } catch (error) {
        console.error('Error updating the user image:', error);
      }
    }
  };

  const uploadedImage = userData?.profileImage;
  const bgImageStyle = uploadedImage ? `url(${uploadedImage})` : '';

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const onSubmit = async (data: UserProfile) => {
    setIsEditing(false);
    const updatedData = await userApi.patchUserDataById({ id }, data);
    setUserData(updatedData);
  };

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const openDeletePopup = () => {
    setIsDeletePopupOpen(true);
  };

  const closeDeletePopup = () => {
    setIsDeletePopupOpen(false);
  };

  const handleDeleteAccount = async () => {
    await authApi.postLeave();
    closeDeletePopup();
    router.push('/main');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col justify-center items-center h-screen pb-10 min-w-[930px] bg-BG-2 min-h-[750px]'>
        <div className='flex justify-end w-10/12 '>
          {!isEditing ? (
            <div
              className='bg-BG-1 cursor-pointer text-text-4 font-PretendardMedium text-14 border-[0.5px] border-border rounded-[10px] py-2 px-4 mb-4'
              onClick={handleEditButtonClick}>
              수정하기
            </div>
          ) : (
            <button
              type='submit'
              className='bg-BG-1 text-text-4 font-PretendardMedium text-14 border-[0.5px] border-border rounded-[10px] py-2 px-4 mb-4'>
              완료
            </button>
          )}
        </div>
        <div className='w-10/12 h-[35%] xl:h-[250px] bg-white rounded-lg shadow-custom2 mb-8 flex items-center justify-center  xl-min:min-h-[300px]'>
          <div className='w-10/12 h-4/5 flex'>
            <div className='w-3/12 flex flex-col justify-center items-center xl:mr-2'>
              {/* <img src={`${uploadedImage}`} alt='profileImage' /> */}
              <div className='rounded-full w-[173px] h-[173px] xl:w-[132px] xl:h-[132px] mb-5'>
                <div className='xl:hidden'>{svgPinTalkEmoPlaceBig}</div>
                <div className='xl-min:hidden'>{svgPinTalkEmoPlaceSmall}</div>
              </div>
              <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                className='hidden'
                id='upload-photo'
              />
              <label htmlFor='upload-photo' className='cursor-pointer'>
                <div className='bg-BG-1 text-text-4 font-PretendardMedium text-13 border-[0.5px] border-border rounded-[10px] py-2 px-3'>
                  사진 변경하기
                </div>
              </label>
            </div>
            <div className='w-[30%] h-[70%] flex my-auto flex-col justify-between ml-10'>
              <div className='min-h-[60%] xl:min-h-[55%]'>
                <div className='mb-1 font-PretendardMedium xl:text-14 text-16 text-text-1'>
                  프로필 이름
                </div>
                {isEditing ? (
                  <input
                    {...register('profileName', { required: isEditing })}
                    placeholder='프로필 이름을 입력해주세요'
                    className='border-border border w-full rounded-[10px] h-[40px] xl:mb-3 p-3 xl:text-12 text-14 placeholder:text-text-5'
                  />
                ) : (
                  <div className='text-16 text-text-4 mt-2'>{userData?.profileName}</div>
                )}
              </div>
              <div className='min-h-[60%]'>
                <div className='mb-1 font-PretendardMedium xl:text-14 text-16 text-text-1'>
                  이메일
                </div>
                <div className='text-16 text-text-4 mt-2'>{userData?.email}</div>
              </div>
            </div>
            <div className='w-5/12 h-[70%] flex my-auto flex-col justify-center xl:ml-6 ml-8'>
              <div className='mb-1 font-PretendardMedium xl:text-14  text-16 text-text-1'>
                상태 메세지
              </div>
              {isEditing ? (
                <textarea
                  {...register('description', { required: isEditing })}
                  placeholder='상태 메세지를 입력해주세요'
                  className='border-border border rounded-[10px] h-full p-3 xl:text-12  text-14 placeholder:text-text-5'
                />
              ) : (
                <textarea className='h-full text-16 text-text-4' value={userData?.description} />
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
                    {...register('serviceName', { required: isEditing })}
                    placeholder='서비스 이름을 입력해주세요'
                    className='border-border border rounded-[10px] xl:h-[30px] h-[40px] xl:w-8/12 w-9/12 xl:p-2 p-3 xl:text-12  text-14 placeholder:text-text-5'
                  />
                ) : (
                  <div className='text-16 text-text-4 xl:h-[30px] h-[40px] flex items-center'>
                    {userData?.serviceName}
                  </div>
                )}
              </div>
              <div className={`flex my-3 items-center ${isEditing ? 'justify-between' : ''}`}>
                <div className='w-[110px] xl:w-[90px]'>서비스 도메인</div>
                {isEditing ? (
                  <input
                    {...register('serviceDomain', { required: isEditing })}
                    placeholder='서비스 도메인 주소를 입력해주세요'
                    className='border-border border rounded-[10px] xl:h-[30px] h-[40px] xl:w-8/12 w-9/12 xl:p-2 p-3 xl:text-12 text-14 placeholder:text-text-5'
                  />
                ) : (
                  <div className='text-16 text-text-4 xl:h-[30px] h-[40px] flex items-center'>
                    {userData?.serviceDomain}
                  </div>
                )}
              </div>
              <div className={`flex mt-3 h-3/5 ${isEditing ? 'justify-between' : ''}`}>
                <div className='w-[110px] xl:w-[90px]'>서비스 소개</div>
                {isEditing ? (
                  <textarea
                    {...register('serviceExpl', { required: isEditing })}
                    placeholder='서비스 소개를 입력해주세요'
                    className='border-border border rounded-[10px] min-h-[90px] h-full xl:w-8/12 w-9/12 xl:px-2 px-3 xl:py-1 py-2 xl:text-12 text-14 placeholder:text-text-5'
                  />
                ) : (
                  <textarea
                    readOnly={!isEditing}
                    className='text-14 text-text-4 min-h-[90px] h-full xl:w-8/12 w-[65%] '
                    value={userData?.serviceExpl}
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
              <button
                onClick={openDeletePopup}
                className='text-white bg-custom_red border-[0.5px] border-border rounded-[10px] py-2 px-3'>
                계정 삭제
              </button>
              {isDeletePopupOpen && (
                <DeleteAccountPopup
                  isOpen={isDeletePopupOpen}
                  onClose={closeDeletePopup}
                  onDelete={handleDeleteAccount}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AdminProfilePage;
