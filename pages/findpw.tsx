import { ReactElement } from 'react';
import { LoginLayout } from '@/components/common';
import { FindPWPage } from '../components/findPW/FindPWPage';

export default function findpw() {
  return <FindPWPage />;
}

findpw.getLayout = (page: ReactElement) => {
  return <LoginLayout>{page}</LoginLayout>;
};
