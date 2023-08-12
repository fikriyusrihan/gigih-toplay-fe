import { Text, CardBody, Card, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

Index.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  })
};

export default function Index({ comment }) {
  const timestamp = new Date(comment.timestamp);

  return (
    <Card flexShrink="0">
      <CardBody>
        <Stack spacing="4" gap={0}>
          <Text fontSize="xs">{timestamp.toLocaleString()}</Text>
          <Text fontSize="sm">
            <span style={{ fontWeight: 'bold', marginRight: '4px' }}>{comment.username}</span>
            {comment.comment}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
