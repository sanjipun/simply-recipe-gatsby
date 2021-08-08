/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sanji's Recipes",
    description: "Nice and clean recipes site.",
    author: "@SanjiPun",
    person: { name: "Sanji", age: 23 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "Sanji", age: 23 },
      { name: "Nami", age: 21 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/styles`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "kizxatx6b3fe",
        accessToken: "2a2lwwKb5Tm8nD6zsOQ5NzWWdZLOsBf6htdiow1aBV0",
      },
    },
    `gatsby-plugin-react-helmet`,
    //{
    //  resolve: `gatsby-plugin-webfonts`,
    //  options: {
    //    fonts: {
    //      google: [
    //        {
    //          family: "Montserrat",
    //          variants: ["400"],
    //        },
    //        {
    //          family: "Incolsolata",
    //          variants: ["400", "500", "600", "700"],
    //        },
    //      ],
    //    },
    //  },
    //},
  ],
}
