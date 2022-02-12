import { Layout } from '@components';
import { Heading, Section } from '@styles';
import React from 'react';

const DesignsPage = () => {
  return (
    <Layout animateNav={false} isHome={false} footer={true}>
      <Section>
        <Heading>Designs</Heading>
      </Section>
    </Layout>
  );
};

export default DesignsPage;
