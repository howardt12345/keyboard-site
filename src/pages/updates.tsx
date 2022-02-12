import { Layout } from '@components';
import { Heading, Section } from '@styles';
import React from 'react';

const UpdatesPage = () => {
  return (
    <Layout animateNav={false} isHome={false} footer={true}>
      <Section>
        <Heading>Updates</Heading>
      </Section>
    </Layout>
  );
};

export default UpdatesPage;
