import { createGlobalStyle } from 'styled-components';
import { theme as themeValues } from './theme';
import media from './media';
import mixins from './mixins';
import FontFaces from './fonts';
import TransitionStyles from './TransitionStyles';

const { fontSizes, fonts } = themeValues;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};
  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.3;
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.xl};
    ${media.phablet`font-size: ${fontSizes.lg};`}
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${themeValues.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0 0 10px 0;
  }
  h1 {
    &.big-title {
      font-size: 80px;
      line-height: 1.1;
      margin: 0;
      ${media.desktop`font-size: 70px;`};
      ${media.tablet`font-size: 60px;`};
      ${media.phablet`font-size: 50px;`};
      ${media.phone`font-size: 40px;`};
    }
    &.medium-title {
      font-size: 60px;
      line-height: 1.1;
      margin: 0;
      ${media.desktop`font-size: 50px;`};
      ${media.tablet`font-size: 40px;`};
    }
  }
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${themeValues.transition};
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${({ theme }) => theme.colors.accent};
    }
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  p {
    margin: 0 0 15px 0;
    & > a {
      ${mixins.inlineLink};
    }
    & > code {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.background};
      font-size: ${fontSizes.sm};
      border-radius: ${themeValues.borderRadius};
      padding: 0.3em 0.5em;
    }
  }
  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: ${fontSizes.lg};
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${({ theme }) => theme.colors.accent};
        }
      }
    }
  }
  blockquote {
    border-left-color: ${({ theme }) => theme.colors.accent};
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;
    p {
      font-style: italic;
      font-size: 24px;
    }
  }
  hr {
    background-color: ${({ theme }) => theme.colors.background};
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }
  code {
    font-family: ${fonts.Raleway};
    font-size: ${fontSizes.md};
  }
  #logo {
    color: ${({ theme }) => theme.colors.accent};
  }
  .overline {
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${fonts.Raleway};
    font-size: ${fontSizes.md};
    font-weight: normal;
  }
  .subtitle {
    color: ${({ theme }) => theme.colors.accent};
    margin: 0 0 20px 0;
    font-size: ${fontSizes.md};
    font-family: ${fonts.Poppins};
    font-weight: normal;
    line-height: 1.5;
    ${media.desktop`font-size: ${fontSizes.sm};`};
    ${media.tablet`font-size: ${fontSizes.smish};`};
    a {
      ${mixins.inlineLink};
      line-height: 1.5;
    }
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.accent};
    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }
    a {
      ${mixins.inlineLink};
      font-family: ${fonts.Raleway};
      font-size: ${fontSizes.sm};
      font-weight: bold;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }
  ${TransitionStyles};
`;

export default GlobalStyle;
