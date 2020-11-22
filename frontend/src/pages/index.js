import React from 'react';
import Logo from '../components/Logo';
import styled from 'styled-components';
import HeroVideo from '../components/HeroVideo';

const LogoHomePage = styled(Logo)`
  margin-top: 2rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  &:after {
    content: '';
    width: 100vw;
    height: 1px;
    background: white;
    position: absolute;
    margin-top: 2rem;
    top: 100%;
  }
`;

const index = () => {
  return (
    <>
      <HeroVideo />
      <LogoHomePage />
    </>
  );
};

export default index;
