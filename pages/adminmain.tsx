import { ReactElement } from 'react';
import { AdminMainPage } from '../components/adminMain/AdminMainPage';
import { AdminLayout } from '../components/common/AdminLayout';

export default function main() {
  return (
    <>
      <AdminMainPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};
