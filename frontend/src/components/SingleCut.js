import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useState, useEffect } from 'react';

const CutCardContainer = styled.div`
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 400px;
  max-width: 400px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease-in-out;
  ${({ hovered }) =>
    hovered &&
    `
    transform: scale(1.01);
  `}
`;
const CutImageBackground = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center center;
  ${({ hovered }) =>
    hovered &&
    `
    animation: dimmer 1s;
    filter: brightness(0.8);
  `}
  @keyframes dimmer {
    from {
      filter: brightness(100%);
    }
    to {
      filter: brightness(80%);
    }
  }
`;
const CutContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${({ hovered }) =>
    hovered &&
    `
    top: 30%;
  `}
  h1 {
    color: white;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  p {
    opacity: 0;
    color: white;
    ${({ hovered }) =>
      hovered &&
      `
      opacity: 1;
      animation: fadein 1s;
      visibility: visible;
  `}
  }
  transition: all 0.5s;
  /* #{$self}--hovered & {
      transform: translateY(20%);
      .card__desc {
        animation: fadein 1s;
        opacity: 1;
        visibility: visible;
      }
    } */
  @keyframes fadein {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export default function SingleCut({ cut }) {
  const [isHovered, setHovered] = useState(false);
  return (
    <CutCardContainer
      className='card'
      image={cut.image1.asset.fluid.src}
      onMouseEnter={() => {
        setHovered(true);
        console.log('changed');
      }}
      onMouseLeave={() => {
        setHovered(false);
        console.log('changed');
      }}
      hovered={isHovered}
    >
      <CutImageBackground src={cut.image1.asset.url} hovered={isHovered} />
      <CutContent className='card__Content' hovered={isHovered}>
        <h1>{cut.haircutTitle}</h1>
        <p>{cut.description}</p>
      </CutContent>
    </CutCardContainer>
  );
}
