import Navbar from '../../components/Navbar';
import Video from '../../components/Video';
import {
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text
} from '@chakra-ui/react';
import { videos } from '../../utils/dummy_data';
import { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function Index() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState({});

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setResponse({ data: videos });
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const data = videos.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase())
      );
      setResponse({ data });
    } else {
      setResponse({ data: videos });
    }
  }, [query]);
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

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaMagnifyingGlass} color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search for live videos..."
            value={query}
            onChange={handleQueryChange}
          />
        </InputGroup>
      </Flex>

      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
        gap={2}
        paddingX={10}
        marginTop={10}
        marginBottom={10}>
        {response?.data?.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </Grid>
    </>
  );
}
