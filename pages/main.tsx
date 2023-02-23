import { LoginLayout } from '@/components/common';
import { MainPage } from '@/components/main';
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
