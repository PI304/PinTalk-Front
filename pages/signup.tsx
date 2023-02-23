import { ReactElement } from 'react';
import { LoginLayout } from '@/components/common';
import { SignUpPage } from '@/components/signUp';

export default function signup() {
  return (
    <>
      <SignUpPage />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LoginLayout>{page}</LoginLayout>;
};