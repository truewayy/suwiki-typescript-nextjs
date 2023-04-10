import { Container, Flex, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import lectureMain from '@/apis/Lecture';
import LectureCard from '@/components/Lecture/LectureCard';

export default function Home() {
  const { data: lectureList } = useQuery(['main'], lectureMain);
  return (
    <Container maxW="60%">
      <Head>
        <title>SUWIKI</title>
      </Head>
      <Flex w="100%" justify="space-between">
        <VStack width="49%">
          {lectureList?.map((lecture) => (
            <LectureCard key={lecture.id} {...lecture} />
          ))}
        </VStack>
      </Flex>
    </Container>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery(['main'], lectureMain, {
      staleTime: 1000 * 60 * 5,
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
}
