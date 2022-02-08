import { Layout } from "@components";
import { Heading, Section } from "@styles";
import * as React from "react";

const DesignsPage = () => {
  return (
    <Layout animateNav={false} isHome={false} footer={true}>
      <Section>
        <Heading>Design</Heading>
      </Section>
    </Layout>
  );
};

export default DesignsPage;
