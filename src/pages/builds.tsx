import { Layout } from "@components";
import { Heading, Section } from "@styles";
import * as React from "react";

const BuildsPage = () => {
  return (
    <Layout animateNav={false} isHome={false} footer={true}>
      <Section>
        <Heading>Builds</Heading>
      </Section>
    </Layout>
  );
};

export default BuildsPage;
