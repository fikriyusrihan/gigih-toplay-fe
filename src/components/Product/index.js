import { Card, CardBody, Heading, Stack, Image } from '@chakra-ui/react';

export default function Index() {
  return (
    <Card maxW="40">
      <CardBody p={2} margin="auto">
        <Image
          minH="0"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="2">
          <Heading size="sm">Living room Sofa</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}
