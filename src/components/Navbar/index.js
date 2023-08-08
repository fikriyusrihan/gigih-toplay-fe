import { Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { FaFilm, FaRightToBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Index() {
  const handleLoginClick = () => {
    alert('Coming soon!');
  };

  return (
    <Flex boxShadow="xs" p="6" rounded="md" bg="white" align="center" justify="space-between">
      <Link to={'/'}>
        <Flex gap="2" align="center">
          <Icon as={FaFilm} color="#38A069" />
          <Heading as="h4" size="md" color="#38A069">
            Tokopedia Play
          </Heading>
        </Flex>
      </Link>

      <Button
        onClick={handleLoginClick}
        leftIcon={<FaRightToBracket />}
        colorScheme="green"
        variant="outline"
        size="sm">
        Login
      </Button>
    </Flex>
  );
}
