module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'brewhubdb',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'limelight',
          'source sans pro:300,400,400i,700', // you can also specify font weights and styles
          'Oleo+Script:700',
          'Montserrat:300,400,500,600,700,800',
        ],
        display: 'swap',
      },
    }],

};
