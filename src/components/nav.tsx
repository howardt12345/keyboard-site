import React, { Component } from 'react';
import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { throttle } from 'throttle-typescript';
import config from '@config';
import { Menu, ToggleButton } from '@components';
import { IconLogo } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { fontSizes, fonts, loaderDelay } = theme;

const StyledContainer = styled.header<{
  scrollDirection: string;
}>`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${(props) =>
    props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight};
  box-shadow: ${(props) =>
    props.scrollDirection === 'up'
      ? `0 10px 30px -10px ${({ theme }: { theme: any }) =>
          theme.translucent_bg}`
      : 'none'};
  transform: translateY(
    ${(props) =>
      props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px'}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const StyledNav = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 90vw;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${fonts.Raleway};
  counter-reset: item 0;
  z-index: 12;
`;
const StyledTitle = styled.h2`
  font-size: ${fontSizes.xxl};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${fonts.Poppins};
  font-weight: normal;
  padding: 0;
  margin: 0;
  display: block;
  ${media.tablet`display: none;`};
`;
const StyledLogo = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  fill: ${({ theme }) => theme.colors.accent};
  ${mixins.flexCenter};
  a {
    display: none;
    ${media.tablet`display: block;`};
    fill: ${({ theme }) => theme.colors.accent};
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${({ theme }) => theme.colors.translucent_accent};
      }
    }
    svg {
      fill: ${({ theme }) => theme.colors.accent};
      transition: ${theme.transition};
      user-select: none;
    }
  }
`;
const StyledHamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div<{ menuOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.accent};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
    top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props) => (props.menuOpen ? 0 : 1)};
    transition: ${(props) =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props) =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`;
const StyledLink = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const StyledList = styled.ol`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledListItem = styled.li`
  margin: 0 8px;
  position: relative;
  font-size: ${fontSizes.lg};
`;
const StyledListLink = styled(Link)`
  padding: 8px 6px;
`;

const DELTA = 5;

class Nav extends Component<{ animate: boolean }> {
  state = {
    isMounted: !this.props.animate,
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({ isMounted: true }, () => {
          window.addEventListener('scroll', () =>
            throttle(this.handleScroll, 100),
          );
          window.addEventListener('resize', () =>
            throttle(this.handleResize, 100),
          );
          window.addEventListener('keydown', (e) => this.handleKeydown(e));
        }),
      100,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', (e) => this.handleKeydown(e));
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > config.navHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = (e: KeyboardEvent) => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state;
    const { animate } = this.props;
    const timeout = animate ? loaderDelay : 0;
    const fadeClass = animate ? 'fade' : '';
    const fadeDownClass = animate ? 'fadedown' : '';

    return (
      <StyledContainer scrollDirection={scrollDirection}>
        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledTitle>
                  <StyledListLink
                    href={config.homeLink.url}
                    aria-label={config.homeLink.name}
                  >
                    {config.siteTitle.toUpperCase()}
                  </StyledListLink>
                </StyledTitle>
              </CSSTransition>
            )}
          </TransitionGroup>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledLogo>
                  {animate ? (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      href={config.homeLink.url}
                      aria-label={config.homeLink.name}
                    >
                      <IconLogo />
                    </a>
                  ) : (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      href={config.homeLink.url}
                      aria-label={config.homeLink.name}
                    >
                      <IconLogo />
                    </a>
                  )}
                </StyledLogo>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <ToggleButton />
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledHamburger onClick={this.toggleMenu}>
                  <StyledHamburgerBox>
                    <StyledHamburgerInner menuOpen={menuOpen} />
                  </StyledHamburgerBox>
                </StyledHamburger>
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledLink>
            <StyledList>
              <TransitionGroup component={null}>
                {isMounted &&
                  config.navLinks &&
                  config.navLinks.map(({ url, name }, i) => (
                    <CSSTransition
                      key={i}
                      classNames={fadeDownClass}
                      timeout={timeout}
                    >
                      <StyledListItem
                        style={{
                          transitionDelay: `${animate ? i * 100 : 0}ms`,
                        }}
                      >
                        <StyledListLink href={url}>{name}</StyledListLink>
                      </StyledListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </StyledList>
          </StyledLink>
        </StyledNav>
        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </StyledContainer>
    );
  }
}

export default Nav;
