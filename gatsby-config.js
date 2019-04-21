module.exports = {
  siteMetadata: {
    title: "Portfolio Simon Stauffer",
    author: "Simon Stauffer",
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
