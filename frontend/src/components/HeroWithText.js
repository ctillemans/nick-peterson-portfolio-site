import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeroFullWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${(props) => `${props.height}vh`};
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  color: white;
  overflow: hidden;
  img {
    width: 100vw;
  }
  h1 {
    color: white;
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const HeroWithText = ({ image, title, subtitle, height = 100 }) => {
  return (
    <HeroFullWrapper image={image} height={height}>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </HeroFullWrapper>
  );
};

export default HeroWithText;
