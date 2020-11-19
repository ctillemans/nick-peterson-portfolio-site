import React from 'react';
import styled from 'styled-components';
import SingleCut from './SingleCut';

const CutListStyles = styled.div`
  /* width: 90vw; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: auto;
  padding: 2rem;
`;

export default function CutsList({ cuts }) {
  return (
    <CutListStyles>
      {cuts.nodes.map((cut) => {
        return <SingleCut key={cut.id} cut={cut} />;
      })}
    </CutListStyles>
  );
}
