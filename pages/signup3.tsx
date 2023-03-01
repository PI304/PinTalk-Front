import { ReactElement } from 'react';
import { LoginLayout } from '@/components/common';
import { SignUpPage3 } from '@/components/signUp';

export default function signup() {
  return (
    <>
      <SignUpPage3 />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LoginLayout>{page}</LoginLayout>;
};
