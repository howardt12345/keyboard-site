import { Layout } from "@components";
import { Heading, Section } from "@styles";
import React from "react";

const DesignsPage = ({ location }: { location: any }) => {
  return (
    <Layout
      animateNav={location.state?.animate ?? false}
      isHome={false}
      footer={true}
    >
      <Section>
        <Heading>Designs</Heading>
      </Section>
    </Layout>
  );
};

export default DesignsPage;
