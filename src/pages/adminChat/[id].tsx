import { ReactElement } from 'react';
import { AdminChatPage } from '@components/adminChat';
import { AdminLayout } from '@components/common';
import CustomHead from '@seo/CustomHead';
import Seo from '@constants/seo';

export default function main() {
  return (
    <>
      <CustomHead title={Seo.Title.chat} />
      <AdminChatPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};
