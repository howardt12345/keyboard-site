const config = {
  siteTitle: 'Howard Tseng',
  siteDescription:
    'Howard Tseng is a freelance photographer and front-end developer based in Toronto, ON.',
  siteKeywords:
    'Howard Tseng, Howard, Tseng, howardt12345, ht12345, freelance, photographer, freelance photographer, mobile developer, software engineer, front-end developer, flutter, java, javascript, uottawa, Ottawa, Toronto',
  siteUrl: 'https://howardt12345.com',
  siteLanguage: 'en_US',
  googleVerification: 'Y1H6DvIHTlzQB6yi1I0UZOWIA5LFG6aFN7TodKgaJaI',
  googleAnalyticsID: 'UA-57746409-1',
  recaptchaKey: '6LcbdQAVAAAAAAEfsgM9_6CmD_rvFmCYmKo8MNk0',
  name: 'Howard Tseng',
  firstName: 'Howard',
  location: 'Toronto, ON, CA',
  lat: 43.64877,
  lng: -79.38171,
  email: 'me@howardt1345.com',
  github: 'https://github.com/howardt12345',
  insta: '@howardt12345',
  instalink: 'https://instagram.com/howardt12345',
  twitterHandle: '@howardt12345',
  socialMedia: [
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/howardt12345',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/howardt12345',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/howardt12345',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/howardt12345',
    },
    {
      name: 'Redbubble',
      url: 'https://www.redbubble.com/people/howardt12345/',
    },
  ],
  colors: {
    background: '#FFFFFF',
    text1: '#0C0C0C',
    text2: '#7A7A7A',
    tile: '#FFFFFF',
  },
  navLinks: [
    {
      name: 'Designs',
      url: '/designs',
    },
    {
      name: 'Updates',
      url: '/updates',
    },
    {
      name: 'Builds',
      url: '/builds',
    },
    {
      name: 'More',
      url: '/more',
    },
  ],
  navHeight: 72,

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

export default config;
