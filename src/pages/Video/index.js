import { videos } from '../../utils/dummy_data';
import { Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../components/Product';

export async function loader({ params }) {
  const { videoId } = params;
  const video = videos.filter((video) => video.id === videoId)[0];

  return { video };
}

export default function Index() {
  const { video } = useLoaderData();

  return (
    <Grid h="100vh" templateColumns="repeat(5, 1fr)" templateRows="repeat(10, 1fr)" gap={1}>
      <GridItem rowSpan={8} colSpan={4} bg="tomato" rounded={4}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"></iframe>
      </GridItem>
      <GridItem rowSpan={10} colSpan={1} bg="papayawhip">
        <Heading>{video.title}</Heading>
      </GridItem>
      <GridItem rowSpan={2} colSpan={4}>
        <HStack minH="0">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </HStack>
      </GridItem>
    </Grid>
  );
}
