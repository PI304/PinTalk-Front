import { ReactElement } from 'react';
import { AdminChatPage } from '../components/adminChat/AdminChatPage';
import { AdminLayout } from '../components/common/AdminLayout';

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
