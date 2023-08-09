import { Button, FormControl, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useParams } from 'react-router-dom';

export default function Index() {
  const params = useParams();
  const [form, setForm] = useState({
    username: '',
    comment: ''
  });

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/videos/' + params.videoId + '/comments', form).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack p={2} boxShadow="xs" borderRadius={4}>
        <FormControl isRequired>
          <Input
            name="username"
            placeholder="Name"
            size="sm"
            value={form.name}
            onChange={handleNameChange}
          />
        </FormControl>

        <FormControl isRequired>
          <Input
            name="comment"
            placeholder="Comment"
            size="sm"
            value={form.comment}
            onChange={handleCommentChange}
          />
        </FormControl>

        <Button colorScheme="green" size="sm" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
