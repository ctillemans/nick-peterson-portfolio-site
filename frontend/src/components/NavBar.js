import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import { useState } from 'react';
import NavLink from './NavLink';

const NavContainer = styled.nav`
  display: flex;
  height: 70px;
  background: white;
  margin: 0;
`;

const NavLinkList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 800px) {
    display: none;
  }
`;
const NavLogo = styled(Logo)`
  background: black;
  width: 75px;
  &:hover {
    animation: fadeout 0.3s;
    background: white;
    & h1 {
      color: black;
    }
  }
  @media (max-width: 800px) {
  }
  @keyframes fadeout {
    from {
      background: black;
    }
    to {
      background: white;
    }
  }
`;

export default function Navbar() {
  return (
    <>
      <NavContainer>
        <NavLogo color='white' />
        <NavLinkList>
          <NavLink linkpage='' linkTitle='Home' />
          <NavLink linkpage='about' linkTitle='About' />
          <NavLink linkpage='cuts' linkTitle='Cuts' />
          <NavLink linkpage='scheduler' linkTitle='Schedule' />
        </NavLinkList>
      </NavContainer>
    </>
  );
}

// options
// 1. use css to simply hide certain components and rearrange styling with media queries
//
