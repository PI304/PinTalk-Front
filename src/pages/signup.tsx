import { ReactElement } from 'react';
import { LogoutLayout } from '@components/common';
import { SignUpPage } from '@components/signUp';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function signup() {
  return (
    <>
      <CustomHead title={Seo.Title.signup} />
      <SignUpPage />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
