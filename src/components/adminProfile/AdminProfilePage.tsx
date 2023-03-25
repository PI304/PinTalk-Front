import userApi from '@apis/user/userApi';
import { AdminEmail } from 'types/email';
import { svgCopyMini } from '@styles/svg';

const AdminProfilePage = ({ adminEmail }: AdminEmail) => {
  const email = async () => {
    const data = await userApi.getUserById({ id: 1 });
    console.log(data);
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen pb-10 min-w-[930px] bg-BG-2 min-h-[750px]'>
      <div className='flex justify-end w-10/12 '>
        <button className='bg-BG-1 text-text-4 font-PretendardMedium text-14 border-[0.5px] border-border rounded-[10px] py-2 px-4 mb-4'>
          수정하기
        </button>
      </div>
      <div className='w-10/12 h-[35%] bg-white rounded-lg shadow-admin mb-8 flex items-center justify-center  min-h-[200px]'>
        <div className='w-10/12 h-4/5 flex'>
          <div className='w-3/12 flex flex-col justify-center items-center xl:mr-2'>
            <div className='rounded-full w-[173px] h-[173px] xl:w-[132px] xl:h-[132px] bg-[#D9D9D9] mb-5'></div>
            <button className='bg-BG-1 text-text-4 font-PretendardMedium text-13  border-[0.5px] border-border rounded-[10px] py-2 px-3'>
              사진 변경하기
            </button>
          </div>
          <div className='w-[30%] h-[70%] flex my-auto flex-col justify-between'>
            <div className='min-h-[60%] xl:min-h-[55%]'>
              <div className='mb-1 font-PretendardMedium xl:text-14 text-16 text-text-1'>
                프로필 이름
              </div>
              <input
                placeholder='프로필 이름을 입력해주세요'
                className='border-border border w-full rounded-[10px] h-[40px] xl:mb-3 p-3 xl:text-12 text-14 text-text-5'
              />
            </div>
            <div className='min-h-[60%]'>
              <div className='mb-1 font-PretendardMedium xl:text-14 text-16 text-text-1'>
                이메일
              </div>
              <input
                placeholder='이메일을 입력해주세요'
                className='border-border border w-full rounded-[10px] h-[40px] p-3 xl:text-12  text-14 text-text-5'
              />
            </div>
          </div>
          <div className='w-5/12 h-[70%] flex my-auto flex-col justify-center xl:ml-6 ml-8'>
            <div className='mb-1 font-PretendardMedium xl:text-14  text-16 text-text-1'>
              상태 메세지
            </div>
            <textarea
              placeholder='상태 메세지를 입력해주세요'
              className='border-border border rounded-[10px] h-full p-3 xl:text-12  text-14 text-text-5'
            />
          </div>
        </div>
      </div>
      <div className='flex w-10/12 h-2/5 xl-min:min-h-[320px]'>
        <div className='w-1/2 bg-white rounded-lg shadow-admin mr-8 py-5 flex flex-col '>
          <div className='font-PretendardMedium xl:text-12 text-14 text-text-4 xl:ml-6 ml-7'>
            서비스 설정
          </div>
          <div className='w-11/12 font-PretendardMedium xl:text-14 xl:px-8 px-10 py-1 text-16 text-text-1h-full'>
            <div className='flex justify-between my-3 items-center'>
              <div className='xl-min:w-[110px]'>서비스 이름</div>
              <input
                placeholder='서비스 이름을 입력해주세요'
                className='border-border border rounded-[10px] xl:h-[30px] h-[40px] xl:w-8/12 w-9/12 xl:p-2 p-3 xl:text-12  text-14 text-text-5'></input>
            </div>
            <div className='flex justify-between my-3 items-center'>
              <div className='xl-min:w-[110px]'>서비스 도메인</div>
              <input
                placeholder='서비스 도메인 주소를 입력해주세요'
                className='border-border border rounded-[10px] xl:h-[30px] h-[40px] xl:w-8/12 w-9/12 xl:p-2 p-3 xl:text-12  text-14 text-text-5'></input>
            </div>
            <div className='flex flex-col mt-3 h-3/5'>
              <div className='mb-2'>서비스 소개</div>
              <textarea
                placeholder='서비스 소개를 입력해주세요'
                className='border-border border rounded-[10px] min-h-[90px] h-full p-3 xl:text-12 text-14 text-text-5'
              />
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='h-3/5 bg-white rounded-lg shadow-admin py-5 flex flex-col'>
            <div className='font-PretendardMedium xl:text-12 text-14 text-text-4 xl:ml-6 ml-7'>
              계정 설정
            </div>
            <div className='font-PretendardMedium xl:text-14 xl:px-8 px-10 py-2 text-16 text-text-1'>
              <div className='flex my-4 items-center'>
                <div className='xl:w-[100px] w-[120px]'>Access Key</div>
                <div className='xl:mr-6 mr-12'>0000-0000-0000-0000</div>
                <button className='hover:bg-slate-100 hover:rounded-md p-1'>{svgCopyMini}</button>
              </div>
              <div className='flex mt-5 items-center'>
                <div className='xl:w-[100px] w-[120px]'>Secret Key</div>
                <div className='xl:mr-6 mr-12'>0000-0000-0000-0000</div>
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
