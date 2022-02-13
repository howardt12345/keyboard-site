import { Layout } from '@components';
import { getAllDesignIds, getDesignData } from '@lib/designs';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Heading, Section } from '@styles';

export default function Post({
  postData,
}: {
  postData: {
    name: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout isHome={false} animateNav={false} footer={false}>
      <Section>
        <Heading>{postData.name}</Heading>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getDesignData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
