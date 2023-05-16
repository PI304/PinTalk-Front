import { ReactElement } from 'react';
import { LogoutLayoutD } from '@components/common';
import { DocumentationPage } from '@components/documentation';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function documentation() {
  return (
    <>
      <CustomHead title={Seo.Title.documentation} />
      <DocumentationPage />
    </>
  );
}

documentation.getLayout = (page: ReactElement) => {
  return <LogoutLayoutD>{page}</LogoutLayoutD>;
};
