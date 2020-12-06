import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bg from '../../../static/assets/environmental1.jpeg';
import Arrow from './Arrow';
import Slide from './Slide';
import Slides from './Slides';

const testimonials = [
  {
    name: 'Scott',
    testimonial:
      'Professional. Talented. Personable. What mroe can you ask for in a barber?',
  },
  {
    name: 'Max',
    testimonial: 'Best barber in town.',
  },
  {
    name: 'Miles',
    testimonial:
      'I always look forward to getting a fresh cut from Nick. Good times and lots of laughs.',
  },
];

const CarouselStyles = styled.div`
  background: url(${(props) => props.image}); //TODO add props.img here instead
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  transition: all 2s ease-in;
`;

export default function TextCarousel({}) {
  const getWidth = () => window.innerWidth;
  const [state, setState] = useState({
    translate: 0,
    transition: 500,
    activeIndex: 0,
  });

  const { translate, transition, activeIndex } = state;
  const prevSlide = (event) => {
    console.log(event.currentTarget);
    // determine if it is the first slide
    if (activeIndex === 0) {
      return setState({
        ...state,
        activeIndex: testimonials.length - 1,
        translate: (testimonials.length - 1) * getWidth(),
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
    console.log(activeIndex);
    console.log(translate);

    // else transform 100% to the right
  };
  const nextSlide = () => {
    // determine if it is the last slide
    if (activeIndex === testimonials.length - 1) {
      return setState({
        ...state,
        activeIndex: 0,
        translate: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
    // else change transform to move 100%left;
  };

  // Runs after the first render() lifecycle

  return (
    <CarouselStyles image={bg}>
      <Slides translate={translate} transition={transition} width={getWidth}>
        {testimonials.map((testimonial, i) => {
          return (
            <Slide
              key={`slide ` + i}
              slide={testimonial}
              active={activeIndex === i}
            ></Slide>
          );
        })}
      </Slides>
      <Arrow direction='right' handleClick={nextSlide} />
      <Arrow direction='left' handleClick={prevSlide} />
    </CarouselStyles>
  );
}
