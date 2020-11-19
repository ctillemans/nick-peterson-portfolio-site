import { graphql } from 'gatsby';
import React from 'react';
import CutsList from '../components/CutsList';

export default function cuts({ data }) {
  console.log(data);
  return (
    <>
      <CutsList cuts={data.cuts} />
    </>
  );
}

// TODO: change schema to arrray of images to be more dynamic
export const cutsQuery = graphql`
  query cutsQuery {
    cuts: allSanityHaircut {
      nodes {
        id
        haircutTitle
        description
        image1 {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
