import React from 'react';
import 'normalize.css';
import Typography from '../styles/Typography';
import Navbar from './Navbar';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles>
        <Typography>
          <Navbar />
          {children}
        </Typography>
      </GlobalStyles>
    </>
  );
};

export default Layout;
