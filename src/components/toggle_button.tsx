import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "@api/ThemeProvider";

import { FormattedIcon } from "@components/icons";

const StyledLink = styled.a`
  padding: 12px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
const ToggleButton = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledLink onClick={() => toggleTheme()}>
      <FormattedIcon name={isDarkTheme ? "dark" : "light"} />
    </StyledLink>
  );
};

export default ToggleButton;
