const path = require('path');

async function turnHaircutsIntoPages({ graphql, actions }) {
  const { createPage } = actions;
  // get a template for this
  const haircutTemplate = path.resolve('./src/templates/HairCutPage.js');
  // query all of the pizzass

  const { data } = await graphql(`
    query {
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
              fixed {
                base64
              }
              fluid {
                base64
              }
              url
            }
          }
        }
      }
    }
  `);

  console.log(data);

  // figure out the number of pages we need;
  numberOfCuts = data.cuts.nodes.length;

  paginationSize = parseInt(process.env.GATSBY_PAGE_SIZE);

  console.log(
    `number of Cuts: ${numberOfCuts} size of pagination: ${paginationSize}`
  );

  // map over each pizza and create a page for each

  data.cuts.nodes.forEach((cut) => {
    console.log(cut.haircutTitle);
    const path = cut.haircutTitle;
    createPage({
      path,
      component: haircutTemplate,
      context: {
        haircut: cut,
        pagePath: path,
      },
    });
  });
}

exports.createPages = async (params) => {
  // create pages dynamically
  await turnHaircutsIntoPages(params);
  // 1. haircuts
  // 2. Testimonials
};
