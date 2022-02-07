import React from 'react';
import config from '@config';
import { IconButton } from '@components';
import styled from 'styled-components';

const StyledList = styled.ul`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  color: ${({ theme }) => theme.textPrimary};
`;

const Social = () => (
  <StyledList>
    {config.socialMedia &&
      config.socialMedia.map(({ url, name }, i) => (
      <li key={i}>
        <IconButton name={name} url={url} />
      </li>
    ))}
  </StyledList>
);
  

export default Social;