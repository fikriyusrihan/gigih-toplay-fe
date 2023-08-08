import { Heading, HStack, Tag, TagLabel, TagLeftIcon, Text, VStack } from '@chakra-ui/react';
import { FaCircle, FaEye } from 'react-icons/fa6';
import PropTypes from 'prop-types';

Index.propTypes = {
  video: PropTypes.shape({
    meta: PropTypes.shape({
      viewers_count: PropTypes.number.isRequired
    }).isRequired,

    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      display_name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default function Index({ video }) {
  return (
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
  );
}
