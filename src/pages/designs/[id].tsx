import { Layout } from '@components';
import { getAllDesignIds, getDesignData, IDesignData } from '@lib/designs';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
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
        <Image
          src={`${designData.path}/${designData.id}/${designData.img}`}
          alt={designData.name}
          width='600'
          height='400'
        />
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
