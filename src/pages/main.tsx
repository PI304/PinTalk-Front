import { LogoutLayout } from '@components/common';
import { ReactElement } from 'react';
import { MainPage } from '@components/main';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function main() {
  return (
    <>
      <CustomHead title={Seo.Title.main} />
      <MainPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
