import React from 'react';
import 'normalize.css';
import Typography from '../styles/Typography';
import NavBar from './NavBar';
const Layout = ({ children, ...props }) => {
  return (
    <>
      <Typography>
        {props.location.pathname !== '/' && <NavBar />}
        <div>{children}</div>
      </Typography>
    </>
  );
};

export default Layout;
