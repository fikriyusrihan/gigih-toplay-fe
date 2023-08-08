import { Button, FormControl, Input, Stack } from '@chakra-ui/react';

export default function Index() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Coming soon!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack p={2} boxShadow="xs" borderRadius={4}>
        <FormControl isRequired>
          <Input placeholder="Name" size="sm" />
        </FormControl>

        <FormControl isRequired>
          <Input placeholder="Comment" size="sm" />
        </FormControl>

        <Button colorScheme="green" size="sm" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
