// LayoutPrincipal.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import './Layout.scss';
import Footer from './Footer';

interface LayoutPrincipalProps {
  children: ReactNode;
}

function Layout({ children }: Readonly<LayoutPrincipalProps>) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
