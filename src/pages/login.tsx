import { LogoutLayout } from '@components/common';
import { LoginPage } from '@components/Login';
import { ReactElement } from 'react';

export default function main() {
  return (
    <>
      <LoginPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
