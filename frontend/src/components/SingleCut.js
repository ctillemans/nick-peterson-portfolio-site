import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const CutCardContainer = styled.div`
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 400px;
  max-width: 400px;
  height: 400px;
  /* border-radius: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.38, 0.41, 0.27, 1);
  ${({ hovered }) =>
    hovered &&
    `
    transform: scale(1.05);
  `};
`;
const CutImageBackground = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
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
  transition: all 0.3s cubic-bezier(0.38, 0.41, 0.27, 1);
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
    <Link to={`/cut/${cut.id}`}>
      <CutCardContainer
        className='card'
        image={cut.image1.asset.fluid.src}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        hovered={isHovered}
      >
        <CutImageBackground src={cut.image1.asset.url} hovered={isHovered} />
        <CutContent hovered={isHovered}>
          <h1>{cut.haircutTitle}</h1>
          <p>{cut.description}</p>
        </CutContent>
      </CutCardContainer>
    </Link>
  );
}
