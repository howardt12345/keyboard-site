import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';

const { fonts, navDelay } = theme;

const StyledMainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${fonts.Poppins};
  font-size: 12vw;
  line-height: 1;
  font-weight: 400;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`;
const StyledSubtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  font-family: ${fonts.Raleway};
  ${media.bigDesktop`font-size: 48px;`};
  ${media.phablet`font-size: 28px;`};
`;
const StyledHomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout isHome={false} animateNav={true} footer={true}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames='fade'>
            <StyledMainContainer className='fillHeight'>
              <StyledTitle>404</StyledTitle>
              <StyledSubtitle>Page Not Found</StyledSubtitle>
              <StyledHomeButton href='/'>Go Home</StyledHomeButton>
            </StyledMainContainer>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
};

export default NotFoundPage;
