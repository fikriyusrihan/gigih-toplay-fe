import { Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

Index.propTypes = {
  children: PropTypes.node.isRequired
};

export default function Index({ children }) {
  return (
    <Stack
      p={2}
      h="100%"
      direction="column-reverse"
      overflowY="auto"
      boxShadow="xs"
      borderRadius={4}>
      {children}
    </Stack>
  );
}
