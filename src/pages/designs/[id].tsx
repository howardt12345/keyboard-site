import { IconButton, Layout } from '@components';
import {
  designsDir,
  getAllDesignIds,
  getDesignData,
  IDesignData,
} from '@lib/designs';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { FlexContainer, Heading, media, Section } from '@styles';
import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled(FlexContainer)`
  margin-top: 1rem;
  justify-content: flex-start;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledIcons = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const StyledInfoSection = styled.div`
  margin-top: 0;
  margin-left: 1rem;
  ${media.desktop`margin-top: 1rem; margin-left: 0;`};
  ul {
    margin-block-start: 0px;
    margin-block-end: 0.5em;
  }
  li {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 300;
    font-size: 1.1rem;
  }
  p {
    margin-block-end: 0.25em;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 300;
    font-size: 1.1rem;
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
        <StyledHeadingContainer>
          <Heading>{designData.name}</Heading>
          <StyledIcons>
            {designData.repo && (
              <IconButton name='GitHub' url={designData.repo} />
            )}
            {designData.firmware && (
              <IconButton name='CPU' url={designData.firmware} />
            )}
            {designData.qmk && <IconButton name='QMK' url={designData.qmk} />}
            {designData.via && <IconButton name='Via' url={designData.via} />}
            {designData.vial && (
              <IconButton name='Vial' url={designData.vial} />
            )}
          </StyledIcons>
        </StyledHeadingContainer>
        <Line />
        <StyledContainer>
          <StyledImage
            src={`${designsDir}/${designData.id}/${designData.img}`}
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
