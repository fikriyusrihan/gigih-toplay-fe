import { comment, videos } from '../../utils/dummy_data';
import { Divider, Grid, GridItem } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../../components/Comment';
import CommentItem from '../../components/CommentItem';
import CommentForm from '../../components/CommentForm';
import Navbar from '../../components/Navbar';
import Youtube from '../../components/Youtube';
import FeaturedProducts from '../../components/FeaturedProducts';
import VideoDetail from '../../components/VideoDetail';
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
        h="100vh"
        my={{ base: 2, md: 10 }}
        px={{ base: 2, md: 10 }}
        gap={2}
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(10, 1fr)">
        <GridItem rowSpan={8} colSpan={{ base: 10, md: 7 }} bg="green" rounded={4}>
          <Youtube videoId={getVideoId(video.video_url)} />
        </GridItem>

        <GridItem rowSpan={6} colSpan={{ base: 10, md: 3 }}>
          <Comment>
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </Comment>
        </GridItem>

        <GridItem rowSpan={2} colSpan={{ base: 10, md: 3 }}>
          <CommentForm />
        </GridItem>

        <GridItem rowSpan={2} colSpan={10} marginTop={5}>
          <VideoDetail video={video} />

          <Divider marginTop={5} />

          <FeaturedProducts products={video.products} />
        </GridItem>
      </Grid>
    </>
  );
}
