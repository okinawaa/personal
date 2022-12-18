const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, `src`)
      }
    }
  });
};

const careerIds = ["musinsa", "bigpicture", "parksystems", "japan"];

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  careerIds.forEach(career => {
    createPage({
      path: `/career/${career}`,
      component: path.resolve(`src/pages/career.tsx`),
      context: {
        id: career
      }
    });
  });
};
