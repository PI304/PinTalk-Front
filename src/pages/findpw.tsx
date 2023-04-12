import { ReactElement } from 'react';
import { FindPWPage } from '@components/findPW';
import { LogoutLayout } from '@components/common';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function findpw() {
  return (
    <>
      <CustomHead title={Seo.Title.findPW} />
      <FindPWPage />
    </>
  );
}

findpw.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
