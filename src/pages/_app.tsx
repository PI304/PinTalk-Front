import '@styles/globals.css';
import { ReactElement } from 'react';
import { AppPropsWithLayout } from 'types/base';
import { Provider } from 'react-redux';
import store from '@features/store';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <Provider store={store}>
      <div className='font-PretendardRegular'>
        {/* <GlobalStyle /> */}
        {getLayout(<Component {...pageProps} />)}
      </div>
    </Provider>
  );
}
