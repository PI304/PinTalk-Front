import Head from 'next/head';

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='user-scalable=no, width=device-width, initial-scale=1' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <title>{`${title} | PinTalk`}</title>
    </Head>
  );
};

export default CustomHead;
