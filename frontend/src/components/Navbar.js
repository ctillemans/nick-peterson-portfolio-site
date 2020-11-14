import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
const NavContainer = styled.nav`
  z-index: 100;
  height: 50px;
  width: 100vw;
  display: flex;
  background: black;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  width: 40%;
  margin-right: 3rem;
  justify-content: space-between;
  a {
    h3 {
      margin: 0;
    }
  }
`;

const NavLogo = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    h1 {
      margin: 0;
    }
  }
`;

export default function Navbar() {
  // left justified logo
  // right justified links
  // mobile version with rotating x for dropdown

  return (
    <NavContainer>
      <NavLogo>
        <Link to='/'>
          <h1>NP</h1>
        </Link>
      </NavLogo>
      <NavLinks>
        <Link to='/about'>
          <h3>About</h3>
        </Link>
        <Link to='/scheduler'>
          <h3>Scheduler</h3>
        </Link>
        <Link to='/cuts'>
          <h3>Cuts</h3>
        </Link>
        <Link to='/barbery'>
          <h3>The Barbery</h3>
        </Link>
      </NavLinks>
    </NavContainer>
  );
}
