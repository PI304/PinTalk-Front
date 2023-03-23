import { ReactElement } from 'react';
import { AdminLayout } from '@components/common';
import { useRouter } from 'next/router';
import { AdminProfilePage } from '@components/adminProfile';

export default function main() {
  const router = useRouter();
  const { email } = router.query;
  return (
    <>
      <AdminProfilePage adminEmail={email} />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};
