import { ReactElement } from 'react';
import { LogoutLayout } from '@components/common';
import { SignUpPage2 } from '@components/signUp2';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function signup() {
  return (
    <>
      <CustomHead title={Seo.Title.signup} />
      <SignUpPage2 />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
