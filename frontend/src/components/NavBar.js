import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import { useState } from 'react';
import NavLink from './NavLink';
import { FaInstagram, FaYoutube, FaStrava, FaTwitter } from 'react-icons/fa';

const Hamburger = styled.div`
  position: relative;
  margin: auto 0;
  margin-left: 1rem;
  height: 33%;
  width: 30px;
  display: none;
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 30px;
    height: 2px;
    background: black;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  & :nth-child(1) {
    top: 0%;
  }
  & :nth-child(2) {
    top: 50%;
  }
  & :nth-child(3) {
    top: 100%;
  }
  @media (max-width: 800px) {
    display: block;
  }

  ${(props) =>
    props.mobile
      ? `
  & :nth-child(1) {
    top: 50%;
    transform: rotate(45deg);
  }
  & :nth-child(2) {
   display: none;
  }
  & :nth-child(3) {
    top: 50%;
    transform: rotate(-45deg);
  }
  `
      : ``};
`;

const NavContainer = styled.nav`
  position: relative;
  display: flex;
  height: 70px;
  background: white;
  margin: 0;
  @media (max-width: 800px) {
    border-bottom: 0.5px solid lightgray;
  }
`;

const NavLinkList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (max-width: 800px) {
    z-index: 100;
    position: absolute;
    left: -100;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: calc(100vh - 70px);
    top: 70px;
    ${(props) => (props.mobile ? `left: 0` : `left: -100%`)};
    width: 75vw;
    background: black;
  }
`;
const NavLogo = styled(Logo)`
  position: relative;
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
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
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
const SocialLinks = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    height: 33%;
    width: auto;
    padding: 1rem;
  }
  @media (max-width: 800) {
    > * {
      height: 100%;
      width: auto;
      padding: 0.5rem;
    }
  }
`;

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  const handleLinkClick = (target, e) => {
    e.preventDefault();
    toggleMobileNav();
    navigate(`/${target}`);
  };
  return (
    <>
      <NavContainer>
        <Hamburger mobile={mobileNav} onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <NavLogo color='white' />
        <NavLinkList mobile={mobileNav}>
          <NavLink
            linkpage=''
            linkTitle='Home'
            handleLinkClick={handleLinkClick}
          />
          <NavLink
            linkpage='about'
            linkTitle='About'
            handleLinkClick={handleLinkClick}
          />
          <NavLink
            linkpage='cuts'
            linkTitle='Cuts'
            handleLinkClick={handleLinkClick}
          />
          <NavLink
            linkpage='scheduler'
            linkTitle='Schedule'
            handleLinkClick={handleLinkClick}
          />
        </NavLinkList>
        <SocialLinks>
          <FaInstagram />
          <FaStrava />
          <FaTwitter />
        </SocialLinks>
      </NavContainer>
    </>
  );
}

// options
// 1. use css to simply hide certain components and rearrange styling with media queries
//
