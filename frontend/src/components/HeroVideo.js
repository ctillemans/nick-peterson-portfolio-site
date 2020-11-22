import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import video from '../../static/assets/craftsman2.mp4';

const HeroFullWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
  width: auto;
  min-height: 100vh;
  color: white;
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
  div {
    position: absolute;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: white;
      font-size: 4rem;
      opacity: 0.85;
      font-weight: 300;
      &:hover {
        transform: scale(1.05);
        color: yellow;
      }
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      @media (max-width: 800px) {
        font-size: 5rem;
      }
      @media (max-width: 800px) {
        font-size: 3rem;
        margin: 20 auto;
      }
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
    }
    @media (max-width: 800px) {
      margin-top: 4rem;
      flex-direction: column;
    }
  }
`;

const HeroVideo = () => {
  return (
    <HeroFullWrapper>
      <video src={video} muted loop='loop' autoPlay></video>
      <div>
        <Link to='/about'>
          <h1>About</h1>
        </Link>
        <Link to='/cuts'>
          <h1>Cuts</h1>
        </Link>
        <Link to='/scheduler'>
          <h1>Schedule</h1>
        </Link>
      </div>
    </HeroFullWrapper>
  );
};

export default HeroVideo;
