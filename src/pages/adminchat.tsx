import { ReactElement } from 'react';
import { AdminChatPage } from '@components/adminChat';
import { AdminLayout } from '@components/common';

export default function main() {
  return (
    <>
      <AdminChatPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};
