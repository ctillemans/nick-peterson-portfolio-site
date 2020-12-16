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
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
      <ImageContainer image={haircut.haircutImages[0].asset.url} />

      <CutCardContainer>
        <h1>{haircut.haircutTitle}</h1>
        <p>{haircut.description}</p>
        <h2>Type of Hair</h2>
        <p>{`${haircut.hairType} | ${haircut.hair_thickness} | ${haircut.head_shape}`}</p>
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
