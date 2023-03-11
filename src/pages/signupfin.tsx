import { ReactElement } from 'react';
import { LogoutLayout } from '@components/common';
import { SingUpFinPage } from '@components/signUpFin';

export default function signupfin() {
  return (
    <>
      <SingUpFinPage />
    </>
  );
}

signupfin.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
