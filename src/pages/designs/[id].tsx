import { Layout } from '@components';
import { getAllDesignIds, getDesignData, IDesignData } from '@lib/designs';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { FlexContainer, Heading, media, Section } from '@styles';
import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled(FlexContainer)`
  margin-top: 1rem;
`;

const StyledInfoSection = styled.div`
  margin-top: 0;
  margin-left: 1rem;
  ${media.desktop`margin-top: 1rem; margin-left: 0;`};
  width: 35%;
  ul {
    margin-block-start: 0px;
    margin-block-end: 0.5em;
  }
  li {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 300;
  }
  p {
    margin-block-end: 0.25em;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 300;
  }
  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const StyledImage = styled(Image)`
  width: 60%;
`;

export default function Design({
  designData,
}: {
  designData: IDesignData & {
    contentHtml: string;
  };
}) {
  return (
    <Layout isHome={false} animateNav={false} footer={true}>
      <Section>
        <Heading>{designData.name}</Heading>
        <StyledContainer>
          <StyledImage
            src={`${designData.path}/${designData.id}/${designData.img}`}
            alt={designData.name}
            width='600'
            height='400'
          />
          <StyledInfoSection
            dangerouslySetInnerHTML={{ __html: designData.contentHtml }}
          />
        </StyledContainer>
      </Section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDesignIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const designData = await getDesignData(params?.id as string);
  return {
    props: {
      designData,
    },
  };
};
