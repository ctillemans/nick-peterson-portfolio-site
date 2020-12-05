import styled from 'styled-components';

const Slides = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
  transition: transform ${(props) => props.transition}ms;
`;

export default Slides;
