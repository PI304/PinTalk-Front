import React, { useRef, useState, useEffect } from 'react';
import ClipboardJS from 'clipboard';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { svgCopy, svgCopyMini } from '@styles/svg';

interface CodeSnippetBoxProps {
  code: string;
  language: string;
}

const CodeSnippetBox = ({ code, language }: CodeSnippetBoxProps) => {
  function isClient() {
    return typeof window !== 'undefined';
  }

  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const copyButtonRef2 = useRef<HTMLButtonElement>(null);

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (isClient()) {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  const customStyle = {
    ...atomOneDark,
    hljs: {
      ...atomOneDark.hljs,
      background: '#1C253A',
      borderRadius: '16px',
      width: '100%',
      padding: '1rem',
    },
  };

  const containerStyle = {
    width:
      windowWidth && windowWidth >= 1280
        ? '1000px'
        : windowWidth && windowWidth >= 767
        ? '740px'
        : '380px',
    fontSize: windowWidth && windowWidth >= 767 ? '16px' : '14px',
    maxWidth: '100%',
  };

  useEffect(() => {
    if (copyButtonRef.current) {
      const clipboard = new ClipboardJS(copyButtonRef.current);

      clipboard.on('success', (e) => {});

      clipboard.on('error', (e) => {});

      return () => {
        clipboard.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (copyButtonRef2.current) {
      const clipboard2 = new ClipboardJS(copyButtonRef2.current);

      clipboard2.on('success', (e) => {});

      clipboard2.on('error', (e) => {});

      return () => {
        clipboard2.destroy();
      };
    }
  }, []);

  return (
    <div className='bg-BG-navy rounded-2xl relative' style={containerStyle}>
      <SyntaxHighlighter language={language} style={customStyle}>
        {code.trim()}
      </SyntaxHighlighter>
      <button
        ref={copyButtonRef}
        data-clipboard-text={code}
        className='absolute md:hidden top-2 right-2 hover:bg-slate-700 hover:rounded-md p-1'>
        {svgCopy}
      </button>
      <button
        ref={copyButtonRef2}
        data-clipboard-text={code}
        className='absolute md-min:hidden top-[6px] right-[6px] hover:bg-slate-700 hover:rounded-md p-[2px] '>
        {svgCopyMini}
      </button>
    </div>
  );
};

export default CodeSnippetBox;
