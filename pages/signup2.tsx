import { ReactElement } from 'react';
import { LoginLayout } from '@/components/common';
import { SignUpPage2 } from '@/components/signUp/SignUpPage2';

export default function signup() {
  return (
    <>
      <SignUpPage2 />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LoginLayout>{page}</LoginLayout>;
};
