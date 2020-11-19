import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const CutCardContainer = styled.div`
  position: relative;
  min-height: 500px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
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
`;

export default function SingleCut({ cut }) {
  return (
    <CutCardContainer className='card' image={cut.image1.asset.fluid.src}>
      <CutContent className='card__Content'>
        <h1>{cut.haircutTitle}</h1>
        <p>{cut.description}</p>
      </CutContent>
    </CutCardContainer>
  );
}
