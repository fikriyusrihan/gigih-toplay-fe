import Navbar from '../../components/Navbar';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

export default function Index() {
  return (
    <>
      <Navbar />

      <Flex direction="column" w={['100%', '80%']} m="auto" marginTop="10" p="8" textAlign="center">
        <Heading as="h2" size="xl" mb="4" bgGradient="linear(to-r, #11998e, #38ef7d)" bgClip="text">
          Your Shopping Journey Starts Here. <br />
          See It, Love It, Get It.
        </Heading>
        <Text mb="8">
          Welcome to Tokopedia Play, where shopping gets a dynamic upgrade. Say goodbye to static
          images – with our live product videos, you&apos;ll virtually connect with products like
          never before.
        </Text>

        <Button alignSelf="center" colorScheme="green" rightIcon={<FaArrowRight />}>
          Explore
        </Button>
      </Flex>
    </>
  );
}
