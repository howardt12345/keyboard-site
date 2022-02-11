import React from "react";
import styled from "styled-components";
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode";

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
  const { isDark, toggleDark } = useStyledDarkMode();

  return (
    <StyledLink onClick={() => toggleDark()}>
      <FormattedIcon name={!isDark ? "light" : "dark"} />
    </StyledLink>
  );
};

export default ToggleButton;
