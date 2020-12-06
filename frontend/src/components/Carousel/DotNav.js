import React from 'react';
import styled from 'styled-components';

const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  /* padding: 10px; */
  height: 5px;
  width: 5px;
  margin-right: 10px;

  border-radius: 50%;
  background: ${(props) => (props.active ? 'black' : 'white')};
`;

export default function DotNav({ slides, activeIndex }) {
  return (
    <DotContainer>
      {slides.map((slide, i) => (
        <Dot key={i} active={activeIndex === i}></Dot>
      ))}
    </DotContainer>
  );
}
