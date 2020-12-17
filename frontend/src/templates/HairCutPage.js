import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

// haircut card
// title
// haircut image with thumbmails
const CutContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
`;

const ImageContainer = styled.div`
  margin: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 500px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CutCardContainer = styled.div`
  margin: 0 5rem;
  width: 50vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;
const ThumbnailsContainer = styled.div`
  position: absolute;
  bottom: calc(-100px - 1rem);
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbnailImage = styled.div`
  margin: 0 1rem;
  height: 100%;
  width: 100px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;
// TODO: build this out to be like the testimonials container.

export default function SingleCutPage({ pageContext }) {
  console.log(pageContext);
  const { haircut } = pageContext;

  const [activeImage, setActiveImage] = useState(
    // haircut.haircutImages[0].asset.url
    0
  );
  const handleThumbnailClick = (index) => {
    setActiveImage(index);
  };

  return (
    <CutContainer>
      <ImageContainer image={haircut.haircutImages[activeImage].asset.url}>
        <ThumbnailsContainer>
          {haircut.haircutImages.map((image, index) => {
            return (
              <ThumbnailImage
                key={`thumbnail-${index}`}
                index={index}
                image={image.asset.url}
                onClick={() => {
                  handleThumbnailClick(index);
                }}
              />
            );
          })}
        </ThumbnailsContainer>
      </ImageContainer>

      <CutCardContainer>
        <h1>{haircut.haircutTitle}</h1>
        <p>{haircut.description}</p>x
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
