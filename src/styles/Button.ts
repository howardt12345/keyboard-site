import styled from 'styled-components';
import { theme } from './theme';
const { fontSizes, fonts } = theme;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid accent;
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: ${fonts.Raleway};
  color: ${({ theme }) => theme.accent};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1rem 1.75rem;
  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.translucent_accent};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;