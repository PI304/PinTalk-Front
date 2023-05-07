import LogoutLayoutM from '@components/common/LogoutLayoutM';
import { LoginPage } from '@components/Login';
import Seo from '@constants/seo';
import CustomHead from '@seo/CustomHead';
import { ReactElement } from 'react';

export default function main() {
  return (
    <>
      <CustomHead title={Seo.Title.login} />
      <LoginPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <LogoutLayoutM>{page}</LogoutLayoutM>;
};
