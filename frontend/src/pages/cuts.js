import { graphql } from 'gatsby';
import React from 'react';

export default function cuts({ data }) {
  console.log(data);
  return (
    <div>
      <h1>This is the cuts page</h1>
    </div>
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
            fluid {
              base64
            }
          }
        }
      }
    }
  }
`;
