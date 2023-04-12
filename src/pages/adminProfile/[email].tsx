import { ReactElement } from 'react';
import { AdminLayout } from '@components/common';
import { useRouter } from 'next/router';
import { AdminProfilePage } from '@components/adminProfile';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function main() {
  const router = useRouter();
  const { email } = router.query;
  return (
    <>
      <CustomHead title={Seo.Title.profile} />
      <AdminProfilePage adminEmail={email} />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};
