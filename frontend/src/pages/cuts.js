import { graphql } from 'gatsby';
import React from 'react';
import CutsList from '../components/CutsList';
import Layout from '../components/Layout';

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
        description
        date
        hairType
        hair_thickness
        id
        haircutTitle
        head_shape
        haircutImages {
          asset {
            url
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
            fixed {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;

// nodes {
//   id
//   haircutTitle
//   description
//   image1 {
//     asset {
//       url
//       fluid(maxWidth: 500) {
//         ...GatsbySanityImageFluid
//       }
//       fixed {
//         ...GatsbySanityImageFixed
//       }
//     }
//   }
// }
