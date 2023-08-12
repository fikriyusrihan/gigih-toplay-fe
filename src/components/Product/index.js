import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../../utils/axios';

Index.propTypes = {
  id: PropTypes.string.isRequired
};

export default function Index({ id }) {
  const [product, setProduct] = useState({});

  const handleClick = () => {
    window.open(product.product_url, '_blank');
  };

  useEffect(() => {
    axios.get('/products/' + id).then((res) => {
      const product = res.data.data;

      product.price = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      }).format(product.price);

      setProduct(product);
    });
  }, []);

  return (
    <Card maxW="40" cursor="pointer" flexShrink="0" onClick={handleClick}>
      <CardBody p={2}>
        <Image
          minH="0"
          objectFit="cover"
          src={product.image_url}
          alt={`${product.name} thumbnail`}
          borderRadius="lg"
        />
        <Stack mt="2" gap={1}>
          <Heading size="sm" textAlign="center" noOfLines={1}>
            {product.title}
          </Heading>
          <Text fontSize="sm" textAlign="center" noOfLines={1}>
            {product.price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
