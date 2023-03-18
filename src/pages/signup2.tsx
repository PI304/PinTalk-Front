import { ReactElement } from 'react';
import { LogoutLayout } from '@components/common';
import { SignUpPage2 } from '@components/signUp2';

export default function signup() {
  return (
    <>
      <SignUpPage2 />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
