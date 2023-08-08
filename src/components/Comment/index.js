import { Heading, Text, CardBody, Card, StackDivider, Stack, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

Index.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
  })
};

export default function Index({ comment }) {
  return (
    <Card flexShrink="0">
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="sm">{comment.username}</Heading>
            <Text pt="2" fontSize="sm">
              {comment.comment}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
