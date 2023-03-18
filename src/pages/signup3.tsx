import { ReactElement } from 'react';
import { LogoutLayout } from '@components/common';
import { SignUpPage3 } from '@components/signUp3';

export default function signup() {
  return (
    <>
      <SignUpPage3 />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
