const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/designs?home=true',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/0',
        destination: '/designs/keyboard0',
        permanent: true,
      },
      {
        source: '/np0',
        destination: '/designs/numpad0',
        permanent: false,
      },
      {
        source: '/db0',
        destination: '/designs/modified-daughterboard',
        permanent: false,
      },
      {
        source: '/hubdb',
        destination: '/designs/hub-daughterboard',
        permanent: false,
      },
    ];
  },
});
