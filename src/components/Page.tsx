import React, { useEffect, FC, ReactNode } from 'react';
import { Layout } from './common';

type PageProps = {
  title: string;
};

const Page: FC<PageProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | DCLOTH`;
    window.scrollTo(0, 0);
    console.log('hello');
  }, [title]);
  return <Layout>{children}</Layout>;
};

export { Page };
