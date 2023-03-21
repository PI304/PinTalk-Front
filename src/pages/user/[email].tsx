import { ReactElement } from 'react';
import { AdminChatPage } from '@components/adminChat';
import { AdminLayout } from '@components/common';
import { useRouter } from 'next/router';

export default function main() {
  const router = useRouter();
  const { email } = router.query;
  return (
    <>
      <AdminChatPage userEmail={email} />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};
