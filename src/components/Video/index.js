import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text
} from '@chakra-ui/react';
import { FaCircle, FaEye } from 'react-icons/fa6';
import PropTypes from 'prop-types';

Index.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    video_url: PropTypes.string.isRequired,
    user: PropTypes.shape({
      display_name: PropTypes.string.isRequired
    }),
    meta: PropTypes.shape({
      viewers_count: PropTypes.number
    })
  })
};

const getVideoId = (videoUrl) => {
  const url = new URL(videoUrl);
  const params = url.searchParams;

  return params.get('v');
};

export default function Index({ video }) {
  const handleClick = () => {
    alert('Coming soon! ' + video.id);
  };

  return (
    <>
      <Card cursor="pointer" shadow="xs" onClick={handleClick}>
        <CardBody p={2}>
          <Image
            src={`https://img.youtube.com/vi/${getVideoId(video.video_url)}/hqdefault.jpg`}
            alt={`${video.title} thumbnail`}
            borderRadius="md"
          />

          <Stack mt="4" mb="1" spacing="2">
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
            <Heading as="h6" size="sm">
              {video.title}
            </Heading>
            <Text fontSize="xs" color="grey">
              {video.user.display_name}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
