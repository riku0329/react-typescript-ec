import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const LayoutWrap = styled.main`
  max-width: ${(p) => p.theme.layout.width};
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Layout: FC = ({ children }) => {
  return <LayoutWrap>{children}</LayoutWrap>;
};

export { Layout };
