import React from 'react';
import styled from 'styled-components';

const CarouselStyles = styled.div`
  background: black; //TODO add props.img here instead
  height: 100%;
  width: 100%;
  position: relative;
`;

export default function Carousel({}) {
  return (
    <CarouselStyles>
      <Testimonials />
    </CarouselStyles>
  );
}
