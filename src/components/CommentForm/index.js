import { Button, FormControl, Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { useParams } from 'react-router-dom';

export default function Index() {
  const params = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    axios.post('/videos/' + params.videoId + '/comments', form).then(() => {
      setForm({ ...form, comment: '' });
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    axios
      .get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        const user = res.data.data.user;
        setIsLoggedIn(true);
        setForm({ ...form, username: user.username });
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Stack p={2} boxShadow="xs" borderRadius={4}>
        <FormControl isRequired>
          <Input
            name="username"
            placeholder="Name"
            size="sm"
            value={form.username}
            variant={isLoggedIn ? 'filled' : 'outline'}
            onChange={handleNameChange}
            readOnly={isLoggedIn}
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
