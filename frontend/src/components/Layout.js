import React from 'react';
import 'normalize.css';
import Typography from '../styles/Typography';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Typography>
          <div>{children}</div>
        </Typography>
      </div>
    </>
  );
};

export default Layout;
