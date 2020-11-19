import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const CutCardContainer = styled.div`
  height: 300px;
  min-width: 200px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid black;
`;

export default function SingleCut({ cut }) {
  return (
    <CutCardContainer>
      <h1>{cut.haircutTitle}</h1>
      <Img fluid={cut.image1.asset.fluid} />
    </CutCardContainer>
  );
}
