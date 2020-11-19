import React from 'react';
import styled from 'styled-components';
import SingleCut from './SingleCut';

const CutListStyles = styled.div`
  display: flex;
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
