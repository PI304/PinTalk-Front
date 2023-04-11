import { ReactElement } from 'react';
import { LogoutLayoutD } from '@components/common';
import { DescriptionPage } from '@components/description';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function description() {
  return (
    <>
      <CustomHead title={Seo.Title.description} />
      <DescriptionPage />
    </>
  );
}

description.getLayout = (page: ReactElement) => {
  return <LogoutLayoutD>{page}</LogoutLayoutD>;
};
