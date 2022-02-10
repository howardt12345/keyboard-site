import { navigate } from "gatsby";
import React, { useEffect } from "react";

// markup
const IndexPage = () => {
  useEffect(() => {
    navigate("/designs/", {
      state: {
        animate: true,
      },
    });
  }, []);
  return null;
};

export default IndexPage;
