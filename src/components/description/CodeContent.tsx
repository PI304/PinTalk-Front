import CodeSnippetBox from './CodeSnippetBox';

type codeContent = {
  num: number;
  title: string;
  content: string;
  code: string;
};

const CodeContent = ({ num, title, content, code }: codeContent) => {
  return (
    <div className='md:mt-6 xl:mt-10 mt-16 flex'>
      <div className='md:w-[24px] md:h-[24px] w-[30px] h-[30px] bg-blue-main rounded-full flex justify-center items-center mr-3'>
        <div className='font-PretendardSemibold md:text-12 text-16 text-white'>{num}</div>
      </div>
      <div className='md:w-[385px] xl:w-[730px] w-[1100px]'>
        <div className='font-PretendardMedium md:text-18 text-20 text-text-2'>{title}</div>
        <div className='md:text-15 xl:text-17 text-20 text-text-3 md:my-1 my-3 xl:my-2'>
          {content}
        </div>
        <CodeSnippetBox code={code} language='javascript' />
      </div>
    </div>
  );
};

export default CodeContent;
