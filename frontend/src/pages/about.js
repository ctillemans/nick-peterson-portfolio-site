import React from 'react';
import HeroWithText from '../components/HeroWithText';
import portrait from '../../static/assets/portrait.png';
import styled from 'styled-components';
import AnimateIn from '../components/AnimateIn';
import cutImage1 from '../../static/assets/about1.jpg';
import cutImage2 from '../../static/assets/about2.jpeg';
import riding1 from '../../static/assets/riding1.jpeg';
import riding2 from '../../static/assets/riding2.jpeg';
import environmental1 from '../../static/assets/environmental1.jpeg';
const TextBlock = styled.div`
  height: 50vh;
  min-height: 300px;
  width: 50%;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
    font-weight: 200;
    line-height: 3rem;
  }
  @media (max-width: 1200px) {
    padding: 2rem;
    height: auto;
    width: 50vw;
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    padding: 2rem;
    height: auto;
    width: 75vw;
    p {
      font-size: 2rem;
    }
  }
`;

const HalfHeroContainer = styled.div`
  display: flex;
  height: 500px;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media (max-width: 600px) {
    height: 1000px;
    min-height: 500px;
    flex-direction: column;
  }
`;

const HalfHeroImg = styled.div`
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: auto;
  min-width: 50vw;
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    min-height: 500px;
    flex-direction: column;
  }
`;
export default function about() {
  return (
    <section>
      <AnimateIn>
        <HeroWithText
          image={portrait}
          title='Nick Petersen'
          subtitle='Barber | Cyclist | Entrepreneur'
        />
      </AnimateIn>
      <AnimateIn>
        <TextBlock>
          <p>
            "Nick Petersen, the Angry Barber, was born and raised in Southern
            California. With his appreciation for classic style and detail
            oriented mind, he found a passion for cutting hair. Upon graduating
            from The Barbering Program while working two other jobs, he is now
            able to fully pursue what he loves the most. When he isn't cutting
            hair, you might find him at a local coffee shop or cycling in the
            streets."
          </p>
        </TextBlock>
      </AnimateIn>
      <AnimateIn>
        <HalfHeroContainer>
          <HalfHeroImg image={cutImage1} />
          <HalfHeroImg image={riding1} />
        </HalfHeroContainer>
      </AnimateIn>
      <AnimateIn>
        <HeroWithText
          height='80'
          image={environmental1}
          title='Testimonials carousel'
        />
      </AnimateIn>
      <AnimateIn>
        <HalfHeroContainer>
          <HalfHeroImg image={riding2} />
          <HalfHeroImg image={cutImage2} />
        </HalfHeroContainer>
      </AnimateIn>
    </section>
  );
}
