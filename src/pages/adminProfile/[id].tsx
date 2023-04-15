import { ReactElement } from 'react';
import { AdminLayout } from '@components/common';
import { AdminProfilePage } from '@components/adminProfile';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function main() {
  return (
    <>
      <CustomHead title={Seo.Title.profile} />
      <AdminProfilePage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};
