import '@/styles/globals.css';
import { ReactElement } from 'react';
import { GlobalStyle } from '@/styles/globals';
import { AppPropsWithLayout } from '@/@types/base';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <div className='font-PretendardRegular'>
      {/* <GlobalStyle /> */}
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
