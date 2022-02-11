import React, { useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Head, Nav, Footer } from "@components";
import styled from "styled-components";
import { GlobalStyle } from "@styles";

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = (props: any) => {
  useEffect(() => {
    function preventRightClick(e: any) {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    document.addEventListener("contextmenu", preventRightClick);
    return () => document.removeEventListener("contextmenu", preventRightClick);
  });

  const { children, isHome, animateNav, footer } = props;

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Head metadata={site.siteMetadata} />
          <GlobalStyle />
          <StyledContent>
            {!isHome ? <Nav animate={animateNav} /> : <br />}
            <div id="content">
              {children}
              {footer && <Footer />}
            </div>
          </StyledContent>
        </div>
      )}
    />
  );
};

export default Layout;
