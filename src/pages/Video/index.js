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
import axios from '../../utils/axios';
import io from 'socket.io-client';

export async function loader({ params }) {
  const { videoId } = params;

  const response = await axios.get('/videos/' + videoId);
  const video = response.data.data;

  return { video };
}

export default function Index() {
  const { video } = useLoaderData();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get('/videos/' + video.id + '/comments', { params: { limit: 10, page: 1 } })
      .then((res) => {
        const comments = res.data.data.items;
        setComments(comments);
      });

    const socket = io(process.env.REACT_APP_SOCKET_URL, {
      path: '/api/v1/comments',
      query: { videoId: video.id }
    });

    socket.on('newComment', (comment) => {
      setComments((prevComments) => [comment, ...prevComments]);
    });

    return () => {
      socket.disconnect();
    };
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
