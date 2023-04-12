import { ReactElement } from 'react';
import { LogoutLayout } from '@components/common';
import { SingUpFinPage } from '@components/signUpFin';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function signupfin() {
  return (
    <>
      <CustomHead title={Seo.Title.signup} />
      <SingUpFinPage />
    </>
  );
}

signupfin.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
