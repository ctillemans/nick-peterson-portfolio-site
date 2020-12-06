import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import bg from '../../../static/assets/environmental1.jpeg';
import Arrow from './Arrow';
import DotNav from './DotNav';
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

export default function TextCarousel() {
  const getWidth = () => window.innerWidth;

  let lastSlide = testimonials[testimonials.length - 1];
  let firstSlide = testimonials[0];
  let secondSlide = testimonials[1];

  const [state, setState] = useState({
    translate: getWidth(),
    transition: 500,
    activeIndex: 0,
    activeSlides: [lastSlide, firstSlide, secondSlide],
  });
  const { translate, transition, activeIndex, activeSlides } = state;

  const transitionRef = useRef();

  useEffect(() => {
    transitionRef.current = slideTransition;
  });

  useEffect(() => {
    const transitionToActiveSlides = () => {
      transitionRef.current();
    };
    const transitionEnd = window.addEventListener(
      'transitionend',
      transitionToActiveSlides
    );
    return () => {
      window.removeEventListener('transitionend', transitionEnd);
    };
  }, []);
  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 500 });
  }, [transition]);

  const slideTransition = () => {
    let activeSlides = [];

    // first
    if (activeIndex === 0)
      activeSlides = [
        testimonials[testimonials.length - 1],
        testimonials[0],
        testimonials[1],
      ];
    // last
    else if (activeIndex === testimonials.length - 1)
      activeSlides = [
        testimonials[testimonials.length - 2],
        testimonials[testimonials.length - 1],
        testimonials[0],
      ];
    else
      activeSlides = [
        testimonials[activeIndex - 1],
        testimonials[activeIndex],
        testimonials[activeIndex + 1],
      ];
    // any others
    // redefine active slides array
    // setState to new slides and transition: 0;

    setState({
      ...state,
      transition: 0,
      translate: getWidth(),
      activeSlides,
    });
  };

  const prevSlide = (event) => {
    setState({
      ...state,
      translate: 0,
      activeIndex:
        activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1,
    });
  };
  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + getWidth(),
      activeIndex:
        activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1,
    });
  };

  // Runs after the first render() lifecycle

  return (
    <CarouselStyles image={bg}>
      <Slides translate={translate} transition={transition} width={getWidth()}>
        {activeSlides.map((testimonial, i) => {
          return (
            <Slide
              key={`slide ` + i}
              slide={testimonial}
              active={activeIndex === i}
            ></Slide>
          );
        })}
      </Slides>
      <DotNav slides={testimonials} activeIndex={activeIndex} />
      <Arrow direction='right' handleClick={nextSlide} />
      <Arrow direction='left' handleClick={prevSlide} />
    </CarouselStyles>
  );
}
