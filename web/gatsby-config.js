require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.SANITY_PROJECT_ID)
module.exports = {
  siteMetadata: {
    title: `cbtavern`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
