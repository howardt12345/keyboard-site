import React from "react";

import { FormattedIcon } from "@components/icons";
import styled from "styled-components";

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

const IconButton = ({ name, url }: { name: string; url: string }) => (
  <StyledLink
    href={url}
    target="_blank"
    rel="nofollow noopener noreferrer"
    aria-label={name}
  >
    <FormattedIcon name={name} />
  </StyledLink>
);

export default IconButton;
