import { Custom404 } from '@components/404';
import { LogoutLayout } from '@components/common';
import { ReactElement } from 'react';
import Seo from '@constants/seo';
import CustomHead from '@seo/CustomHead';

export default function custom404() {
  return (
    <>
      <CustomHead title={Seo.Title.notFound} />
      <Custom404 />
    </>
  );
}

custom404.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
