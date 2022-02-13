import { Layout } from '@components';
import { Heading, Section } from '@styles';
import React from 'react';

const IndexPage = () => {
  return (
    <Layout animateNav={false} isHome={false} footer={true}>
      <Section>
        <Heading>Index</Heading>
      </Section>
    </Layout>
  );
};

export default IndexPage;
