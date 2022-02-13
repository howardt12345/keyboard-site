import { Card, Layout } from '@components';
import { Heading, Section } from '@styles';
import { getSortedDesignsData, IDesignData } from '@lib/designs';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const DesignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

const DesignsPage = ({ allDesignsData }: { allDesignsData: IDesignData[] }) => {
  // logic for home redirect
  const router = useRouter();
  const { home } = router.query;
  const isAnimate = home === 'true' ?? false;

  console.log(allDesignsData);

  return (
    <Layout animateNav={isAnimate} isHome={false} footer={true}>
      <Section>
        <Heading>Designs</Heading>
        <DesignGrid>
          {allDesignsData.map((design) => (
            <Card
              title={design.name}
              src={`${design.path}/${design.id}/${design.img}`}
              path={`/designs/${design.id}`}
            ></Card>
          ))}
        </DesignGrid>
      </Section>
    </Layout>
  );
};

export default DesignsPage;

export const getStaticProps: GetStaticProps = async () => {
  const allDesignsData = getSortedDesignsData();
  return {
    props: {
      allDesignsData: allDesignsData,
    },
  };
};
