import { Layout } from '@components';
import { getAllDesignIds, getDesignData, IDesignData } from '@lib/designs';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Heading, Section } from '@styles';

export default function Design({
  designData,
}: {
  designData: IDesignData & {
    contentHtml: string;
  };
}) {
  return (
    <Layout isHome={false} animateNav={false} footer={false}>
      <Section>
        <Heading>{designData.name}</Heading>
        <div dangerouslySetInnerHTML={{ __html: designData.contentHtml }} />
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
