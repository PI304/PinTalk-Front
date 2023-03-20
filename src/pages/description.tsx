import { ReactElement } from 'react';
import { LogoutLayoutD } from '@components/common';
import { DescriptionPage } from '@components/description';

export default function findpw() {
  return <DescriptionPage />;
}

findpw.getLayout = (page: ReactElement) => {
  return <LogoutLayoutD>{page}</LogoutLayoutD>;
};
