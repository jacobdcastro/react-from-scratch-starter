import React from 'react';
import SEO from './SEO';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <SEO title="React-from-scatch Starter" />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
