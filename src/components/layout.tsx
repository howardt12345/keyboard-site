import React, { useEffect } from "react";
import { Nav, Footer } from "@components";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({
  children,
  isHome,
  animateNav,
  footer,
}: {
  children: any;
  isHome: boolean;
  animateNav: boolean;
  footer: boolean;
}) => {
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

  return (
    <div id="root">
      <StyledContent>
        {!isHome ? <Nav animate={animateNav} /> : <br />}
        <div id="content">
          {children}
          {footer && <Footer />}
        </div>
      </StyledContent>
    </div>
  );
};

export default Layout;
