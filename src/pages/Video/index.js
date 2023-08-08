import { comment, videos } from '../../utils/dummy_data';
import {
  Button,
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack
} from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../components/Product';
import Comment from '../../components/Comment';
import Navbar from '../../components/Navbar';
import { FaCircle, FaEye } from 'react-icons/fa6';
import { getVideoId } from '../../utils/youtube';
import { useEffect, useState } from 'react';

export async function loader({ params }) {
  const { videoId } = params;
  const video = videos.filter((video) => video.id === videoId)[0];

  return { video };
}

export default function Index() {
  const { video } = useLoaderData();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const data = comment.filter((comment) => comment.video_id === video.id);
    setComments(data);
  }, []);

  return (
    <>
      <Navbar />
      <Grid
        paddingX={10}
        h="100vh"
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(10, 1fr)"
        gap={2}
        marginY={10}>
        <GridItem rowSpan={8} colSpan={7} bg="green" rounded={4}>
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${getVideoId(
              video.video_url
            )}?autoplay=1`}></iframe>
        </GridItem>
        <GridItem p={2} rowSpan={6} colSpan={3}>
          <Stack
            p={2}
            direction="column-reverse"
            overflowY="auto"
            h="100%"
            boxShadow="xs"
            borderRadius={4}>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </Stack>
        </GridItem>
        <GridItem p={2} rowSpan={2} colSpan={3}>
          <Stack p={2} boxShadow="xs" borderRadius={4}>
            <Input placeholder="Name" size="sm" />
            <Input placeholder="Comment" size="sm" />
            <Button colorScheme="green" size="sm">
              Submit
            </Button>
          </Stack>
        </GridItem>
        <GridItem rowSpan={2} colSpan={10} marginTop={5}>
          <VStack alignItems="flex-start">
            <HStack>
              <Tag size="sm" variant="subtle" colorScheme="red">
                <TagLeftIcon boxSize="12px" as={FaCircle} />
                <TagLabel>LIVE</TagLabel>
              </Tag>

              <Tag size="sm" variant="outline">
                <TagLeftIcon boxSize="12px" as={FaEye} />
                <TagLabel>{video.meta.viewers_count}</TagLabel>
              </Tag>
            </HStack>

            <Heading size="md" noOfLines={1}>
              {video.title}
            </Heading>

            <Text fontSize="md" color="grey">
              {video.user.display_name}
            </Text>
          </VStack>

          <Divider marginTop={5} />

          {video.products.length <= 0 ? (
            <Card w="100%">
              <CardBody>
                <Text>Featured products coming soon from our live streamers. Stay tuned!</Text>
              </CardBody>
            </Card>
          ) : (
            <Heading size="sm" marginTop={5} marginBottom={4}>
              Featured Products
            </Heading>
          )}

          <HStack spacing={2} overflowX="auto">
            {video.products.map((productId) => (
              <Product key={productId} id={productId} />
            ))}
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
}
