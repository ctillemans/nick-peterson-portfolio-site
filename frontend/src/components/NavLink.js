import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'gatsby';

const NavLink = styled.li`
  height: 100%;
  overflow: hidden;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    h3 {
      color: white;
    }
  }
  a {
    position: relative;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    & h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 200;
    }
    &:after {
      content: '';
      width: 100%;
      height: 1px;
      background: black;
      position: absolute;
      transition: all 0.5s;
      transform: translateX(-100%);
      ${(props) =>
        props.hovered
          ? `
        animation: slidein .3s ;
        transform: translateX(0);
        `
          : `
        animation: slideout .3s;
        transform: translateX(100);
        `}
      top: 100%;
    }
    /* transition: all 0.3s cubic-bezier(0.38, 0.41, 0.27, 1); */
  }
  @keyframes slidein {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideout {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

export default function Navlink({ linkpage, linkTitle }) {
  const [isHovered, setHovered] = useState(false);
  return (
    <NavLink
      hovered={isHovered}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Link to={`/${linkpage}`}>
        <h3>{linkTitle}</h3>
      </Link>
    </NavLink>
  );
}
