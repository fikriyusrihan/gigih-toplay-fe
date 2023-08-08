import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa6';

export default function Index() {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Flex alignItems="center" flexDirection="column" marginTop="50" gap="2">
        <Heading>Oops! {error.statusText}</Heading>
        <Text marginBottom={4}>Sorry, an unexpected error has occurred.</Text>

        <Button leftIcon={<FaArrowLeft />} onClick={handleClick}>
          <Link to={'/'}>Back to Home</Link>
        </Button>
      </Flex>
    </>
  );
}
