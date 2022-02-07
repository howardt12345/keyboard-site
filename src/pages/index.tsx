import { Layout } from "@components";
import { Heading, Section } from "@styles";
import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <Layout animateNav={true} isHome={false} footer={true}>
      <Section>
        <Heading>Home Page</Heading>
      </Section>
    </Layout>
  );
};

export default IndexPage;
