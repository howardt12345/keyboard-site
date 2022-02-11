import styled from "styled-components";
import { theme } from "./theme";
import media from "./media";
const { fonts } = theme;

const Subheading = styled.h2`
  text-align: left;
  font-family: ${fonts.Poppins};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 54px;
  font-weight: 400;
  ${media.desktop`font-size: 54px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 28px;`};
  ${media.phone`font-size: 28px;`};
`;

export default Subheading;
