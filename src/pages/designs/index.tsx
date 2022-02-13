import { Layout } from '@components';
import { Heading, Section } from '@styles';
import { getSortedDesignsData } from '@lib/designs';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

const DesignsPage = () => {
  const router = useRouter();
  const { home } = router.query;
  const isAnimate = home === 'true' ?? false;
  return (
    <Layout animateNav={isAnimate} isHome={false} footer={true}>
      <Section>
        <Heading>Designs</Heading>
      </Section>
    </Layout>
  );
};

export default DesignsPage;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedDesignsData();
  return {
    props: {
      allPostsData,
    },
  };
};
