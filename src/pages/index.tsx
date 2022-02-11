import { navigate } from "gatsby";
import { useEffect } from "react";

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
