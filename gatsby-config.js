/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteMetadata = {
  title: `chanhyuk portfolio`,
  author: {
    name: `Chanhyuk Park`,
    summary: `웹 프론트엔드 개발자입니다. 코드 그 자체의 존재유무에 대하여 생각합니다.`
  },
  description: `제가 지닌 가치관과, 기록을 전달합니다.`,
  siteUrl: `https://chanhyuk.com`
};

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`
  ]
};
