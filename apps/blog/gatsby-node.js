const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const Post = path.resolve(`./src/templates/post.tsx`);
  const postResult = await graphql(
    `
      {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  );
  const posts = postResult.data.allMarkdownRemark.nodes;
  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: Post,
        context: { id: post.id }
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, `src`)
      }
    }
  });
};
