import { ReactElement } from 'react';
import { LogoutLayout } from '@components/common';
import { SignUpPage } from '@components/signUp';

export default function signup() {
  return (
    <>
      <SignUpPage />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
