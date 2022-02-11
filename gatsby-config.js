module.exports = {
  siteMetadata: {
    title: `keyboard-site`,
    siteUrl: `https://kb.ht12345.xyz`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-mdx",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: {
          background: "#FFFFFF",
          background_secondary: "#EAEAEA",
          accent: "#2196F3",
          textPrimary: "#000000",
          textSecondary: "#7A7A7A",
          textBody: "#0C0C0C",
          translucent_accent: "rgba(33, 150, 243, 0.07)",
          shadow_bg: "rgba(234, 234, 234, 0.07)",
        },
        dark: {
          background: "#121212",
          background_secondary: "#151515",
          accent: "#64ffda",
          textPrimary: "#FFFFFF",
          textSecondary: "#858585",
          textBody: "#F3F3F3",
          translucent_accent: "rgba(100, 255, 218, 0.07)",
          shadow_bg: "rgba(21, 21, 21, 0.07)",
        },
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        extensions: ["ts", "tsx"],
        exclude: ["node_modules", ".cache", "public"],
        stages: ["develop"],
        emitWarning: true,
        failOnError: false,
      },
    },
  ],
};
