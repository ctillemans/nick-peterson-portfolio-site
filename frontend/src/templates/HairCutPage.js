import React from 'react';
import styled from 'styled-components';

// haircut card
// title
// haircut image with thumbmails
const CutContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 50vw;
  height: 500px;
  background: black;
`;

const CutCardContainer = styled.div`
  padding: 0 5rem;
  width: 50vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;
// TODO: build this out to be like the testimonials container.

export default function singleCutPage({ pageContext }) {
  console.log(pageContext);
  const { haircut } = pageContext;
  return (
    <CutContainer>
      <ImageContainer />

      <CutCardContainer>
        <h1>{haircut.haircutTitle}</h1>
        <p>Short | clean-cut | timeless</p>
        <p>{haircut.description}</p>
        <div>
          <p>
            Dropdowns could go here like the faq reference I had with the
            rotating plus symbols.
          </p>

          <p>Other cuts sections</p>

          {}
        </div>
      </CutCardContainer>
    </CutContainer>
  );
}
