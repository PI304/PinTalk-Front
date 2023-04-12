import { ReactElement } from 'react';
import { LogoutLayout } from '@components/common';
import { SignUpPage3 } from '@components/signUp3';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function signup() {
  return (
    <>
      <CustomHead title={Seo.Title.signup} />
      <SignUpPage3 />
    </>
  );
}

signup.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
