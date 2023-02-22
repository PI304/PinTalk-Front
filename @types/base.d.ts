/**
 * Base Types
 */
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

type ChildrenType = {
  children: React.ReactNode;
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
