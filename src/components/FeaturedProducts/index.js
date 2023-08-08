import PropTypes from 'prop-types';
import { Card, CardBody, Heading, HStack, Text } from '@chakra-ui/react';
import Product from '../Product';

Index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default function Index({ products }) {
  return (
    <>
      {products.length <= 0 ? (
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
        {products.map((productId) => (
          <Product key={productId} id={productId} />
        ))}
      </HStack>
    </>
  );
}
