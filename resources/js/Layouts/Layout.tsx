// LayoutPrincipal.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import './Layout.scss';

interface LayoutPrincipalProps {
  children: ReactNode;
}

function Layout({ children }: Readonly<LayoutPrincipalProps>) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
