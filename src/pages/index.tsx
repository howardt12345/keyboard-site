import { Layout } from "@components";
import { Heading, Section } from "@styles";
import React from "react";

const IndexPage = () => {
  return (
    <Layout animateNav={false} isHome={false} footer={true}>
      <Section>
        <Heading>More</Heading>
      </Section>
    </Layout>
  );
};

export default IndexPage;
