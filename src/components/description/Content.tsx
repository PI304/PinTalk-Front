type content = {
  id: string;
  title: string;
  content: string;
};

const Content = ({ id, title, content }: content) => {
  return (
    <div id={id}>
      <div className='font-PretendardSemibold md:text-24 xl:text-34 text-38 text-text-1 mt-4  xl:pt-12 pt-16'>
        {title}
      </div>
      <div className='font-PretendardMedium text-text-1  xl:text-17 text-20 md:mt-2 xl:mt-4 mt-8'>
        {content}
      </div>
    </div>
  );
};

export default Content;
