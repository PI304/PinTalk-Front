import { LoginLayout } from '@/components/common/layouts';
import { MainPage } from '@/components/main/MainPage';
import { ReactElement } from 'react';

export default function main() {
  return (
    <>
      <MainPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <LoginLayout>{page}</LoginLayout>;
};
