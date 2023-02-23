import { ReactElement } from 'react';
import { LoginLayout } from '@/components/common';
import { SingUpFinPage } from '@/components/signUpFin';

export default function signupfin() {
  return (
    <>
      <SingUpFinPage />
    </>
  );
}

signupfin.getLayout = (page: ReactElement) => {
  return <LoginLayout>{page}</LoginLayout>;
};
