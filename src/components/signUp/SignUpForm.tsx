// import { useForm } from 'react-hook-form';
// import Link from 'next/link';
// import { useState } from 'react';

// type FormData = {
//   email: string;
//   verificationCode: string;
// };

// const SignUpForm = () => {
//   const { register, handleSubmit, formState } = useForm<FormData>({
//     mode: 'onBlur',
//   });

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     if (isValidEmail(value)) {
//     } else {
//     }
//   };

//   const onSubmit = (data: FormData) => {
//     console.log(data); // 이메일과 인증번호 출력
//   };

//   const isValidEmail = (email: string): boolean => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className='box-border bg-white md:w-[362px] w-[636px] md:h-[303px] h-[344px] shadow-custom rounded-[10px] flex flex-col justify-center items-center mt-10'>
//       <div className='flex '>
//         <div className='md:mt-4 mt-10 text-text-5'>
//           <div className=''>
//             <div className='mb-1 text-text-1 font-PretendardMedium'>이메일</div>
//             <div className='flex'>
//               <form action=''>
//                 <input
//                   type='text'
//                   id='email'
//                   {...register('email', { required: true })}
//                   onChange={handleEmailChange}
//                   placeholder='이메일 형식에 맞게 입력해주세요'
//                   className='md:w-[212px] w-80 h-12 px-3 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
//                 />
//                 <button className='text-blue-main text-14 rounded-[10px] bg-blue-sub2 w-[100px] h-12 ml-2 font-PretendardMedium'>
//                   인증 코드 전송
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div>
//             <div className='mb-1 text-text-1 font-PretendardMedium'>인증 코드 입력</div>
//             <div className='flex'>
//               <input
//                 type='text'
//                 id='verificationCode'
//                 {...register('verificationCode', { required: true })}
//                 placeholder='전송된 인증 코드를 입력해주세요'
//                 className='md:w-[212px] w-80 h-12 px-3 py-2 border border-solid border-gray-300 rounded-lg mb-5 placeholder:text-text-5 placeholder:text-14'
//               />
//               <button
//                 type='submit'
//                 className='text-blue-main text-14 rounded-[10px] bg-blue-sub2  w-[100px] h-12 ml-2 font-PretendardMedium'>
//                 인증 코드 확인
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='md:mt-2 mt-6 flex justify-end md:w-[300px] w-[580px]'>
//         {formState.isDirty && formState.isValid ? (
//           <Link href='./signup2'>
//             <button
//               type='button'
//               className=' p-2 md:w-[75px] w-[94px] h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
//               다음
//             </button>
//           </Link>
//         ) : (
//           <div className='p-2 md:w-[75px] w-[94px] h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
//             다음
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };

// export default SignUpForm;

import Link from 'next/link';
import EmailForm from './Emailform';
import VerificationForm from './VerificationForm';

const SignUpForm = () => {
  return (
    <div className='box-border bg-white md:w-[362px] w-[636px] md:h-[303px] h-[344px] shadow-custom rounded-[10px] flex flex-col justify-center items-center mt-10'>
      <EmailForm />
      <VerificationForm />
      <div className='md:mt-2 mt-6 flex justify-end md:w-[300px] w-[580px]'>
        {true ? (
          <Link href='./signup2'>
            <button
              type='button'
              className=' p-2 md:w-[75px] w-[94px] h-[44px] bg-gradient-to-r from-blue-main to-gradi-3 rounded-full text-white'>
              다음
            </button>
          </Link>
        ) : (
          <div className='p-2 md:w-[75px] w-[94px] h-[44px] bg-blue-sub rounded-full text-white flex justify-center items-center'>
            다음
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
