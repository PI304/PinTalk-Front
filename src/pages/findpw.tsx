import { ReactElement } from 'react';
import { FindPWPage } from '@components/findPW';
import { LogoutLayout } from '@components/common';

export default function findpw() {
  return <FindPWPage />;
}

findpw.getLayout = (page: ReactElement) => {
  return <LogoutLayout>{page}</LogoutLayout>;
};
