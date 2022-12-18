const path = require("path");

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": resolve(__dirname, `src`)
      }
    }
  });
};
