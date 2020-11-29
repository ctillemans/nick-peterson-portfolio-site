import React from 'react';
import HeroWithText from '../components/HeroWithText';
import portrait from '../../static/assets/portrait.png';

export default function about() {
  return (
    <section>
      <HeroWithText image={portrait} />
    </section>
  );
}
