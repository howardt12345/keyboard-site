import { css } from 'styled-components';

type tsizes = {
  [key: string]: number;
};

const sizes: tsizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 960,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator: any, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (literals: TemplateStringsArray, ...args: any) => css`
    @media (max-width: ${emSize}em) {
      ${css(literals, ...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
