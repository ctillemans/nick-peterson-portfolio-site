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
          id
          haircutTitle
          description
        }
      }
    }
  `);
  console.log(data);

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
