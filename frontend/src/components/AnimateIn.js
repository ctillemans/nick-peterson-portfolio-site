import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const ScrollInStyles = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.inView ? `fadeInUp 2s` : `none`)};
  opacity: ${(props) => (props.inView ? 1 : 0)};
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export default function AnimateIn({ children }) {
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <ScrollInStyles inView={inView} ref={ref}>
      {children}
    </ScrollInStyles>
  );
}
