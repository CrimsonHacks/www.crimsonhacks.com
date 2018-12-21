require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "CrimsonHacks 2019",
    description: "",
    canonicalUrl: "https://www.crimsonhacks.com",
    image: "https://www.crimsonhacks.com/logo.png",
    social: {
      twitter: "@crimsonhacks",
    },
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    // MailChimp
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_URL,
      },
    },

    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`${__dirname}/src/index.js`),
      },
    },

    // Get assets (images)
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },

    // Fonts
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Source Sans Pro"],
        },
      },
    },
  ],
}
