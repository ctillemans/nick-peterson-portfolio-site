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
  @media (max-width: 800px) {
    border-bottom: 0.5px solid lightgray;
  }
`;

const NavLinkList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 800px) {
    z-index: 100;
    position: absolute;
    flex-direction: column;
    height: 100%;
    top: 70px;
    ${(props) => (props.mobile ? `left: 0` : `left: -100%`)};
    width: 75vw;
    background: black;
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
    margin: 0 auto;
    background: white;
    & h1 {
      color: black;
    }
    &:hover {
      animation: fadein 0.3s;
      background: black;
      & h1 {
        color: white;
      }
    }
  }
  @keyframes fadeout {
    from {
      background: black;
    }
    to {
      background: white;
    }
  }
  @keyframes fadein {
    from {
      background: white;
    }
    to {
      background: black;
    }
  }
`;

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <NavContainer>
        <div onClick={() => setMobileNav(!mobileNav)}>
          <h3>X</h3>
        </div>
        <NavLogo color='white' />
        <NavLinkList mobile={mobileNav}>
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
