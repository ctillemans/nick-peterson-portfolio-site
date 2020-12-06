import React from 'react';
import styled from 'styled-components';

const SlideStyles = styled.div`
  opacity: 1;
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    color: white;
    font-weight: 200;
    font-size: 2rem;
  }
`;

export default function Slide({ slide, active }) {
  return (
    <SlideStyles active={active} className={`slide`}>
      <h2>"{slide.testimonial}"</h2>
      <h2>-{slide.name}</h2>
    </SlideStyles>
  );
}
