import React from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import styled from 'styled-components';

const ArrowStyles = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    transform: translateX(
      ${(props) => (props.direction === 'left' ? '-2' : '2')}px
    );
    &:focus {
      outline: 0;
    }
  }
`;

export default function Arrow({ direction, handleClick }) {
  return (
    <ArrowStyles direction={direction} onClick={(event) => handleClick(event)}>
      {direction === 'left' ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
    </ArrowStyles>
  );
}
