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
});
