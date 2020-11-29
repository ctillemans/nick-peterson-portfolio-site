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
  height: 80vh;
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

const HeroWithText = ({ image }) => {
  return (
    <HeroFullWrapper image={image}>
      <div>
        <h1>Nick Petersen</h1>
        <p>Barber | Cyclist | Entrepreneur</p>
      </div>
    </HeroFullWrapper>
  );
};

export default HeroWithText;
