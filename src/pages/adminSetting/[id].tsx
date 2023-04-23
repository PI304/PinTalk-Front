import { ReactElement } from 'react';
import { AdminLayout } from '@components/common';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';
import { AdminSettingPage } from '@components/adminSetting';

export default function main() {
  return (
    <>
      <CustomHead title={Seo.Title.profile} />
      <AdminSettingPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};
