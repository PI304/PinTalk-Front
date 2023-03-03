import { LoginLayout } from '@/components/common';
import { ReactElement } from 'react';
import { MainPage } from '@/components/main';

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
