import React from "react";
import { Link } from "gatsby";
import config from "@config";
import styled from "styled-components";
import { theme, mixins, media } from "@styles";

const { fontSizes, fonts } = theme;

interface Props {
  menuOpen: boolean;
}

const StyledContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${(props) => (props.menuOpen ? "visible" : "hidden")};
  display: none;
  ${media.tablet`display: block;`};
`;
const Sidebar = styled.aside`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.Raleway};
  box-shadow: -10px 0px 30px -15px ${({ theme }) => theme.translucent_bg};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled.nav`
  ${mixins.flexBetween};
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
`;
const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${fontSizes.lg} ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.lg};
  `};
`;
const NavLink = styled(Link)`
  ${mixins.link};
  padding: 3px 20px 15px;
  width: 100%;
`;
const Menu = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: any;
}) => {
  const handleMenuClick = (e: { target: any }) => {
    const target = e.target;
    const isLink = target.hasAttribute("href");
    const isNotMenu =
      target.classList && target.classList[0].includes("StyledContainer");

    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <NavLinks>
          <NavList>
            {config.navLinks &&
              config.navLinks.map(
                ({ url, name }: any, i: React.Key | null | undefined) => (
                  <NavListItem key={i}>
                    <NavLink to={url}>{name}</NavLink>
                  </NavListItem>
                ),
              )}
          </NavList>
        </NavLinks>
      </Sidebar>
    </StyledContainer>
  );
};

export default Menu;
