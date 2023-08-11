import Navbar from '../../components/Navbar';
import { Box, Heading, VStack, Text, FormControl, Input, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
import useAuth from '../../hooks/useAuth';

export default function Index() {
  const navigate = useNavigate();
  const isLoggedIn = useAuth();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleUsernameChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/register', form).then((res) => {
      const token = res.data.data.token;
      localStorage.setItem('access_token', token);

      navigate('/');
    });
  };

  return (
    <>
      <Navbar />
      <Box mt={{ base: 10, md: 100 }} mx="auto" p={5} w={['90%', '40%']} boxShadow="xs">
        <VStack>
          <Heading as="h1" size="md" textAlign="center">
            Create an Account
          </Heading>
          <Text w="80%" textAlign="center">
            Ready to experience a whole new way of shopping? Fill in the details, and let&apos;s
            begin this exciting adventure together!
          </Text>

          <VStack w="100%" p={5}>
            <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
              <FormControl isRequired>
                <Input
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleUsernameChange}
                />
              </FormControl>

              <FormControl mt={2} isRequired>
                <Input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleEmailChange}
                />
              </FormControl>

              <FormControl mt={2} isRequired>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handlePasswordChange}
                />
              </FormControl>

              <Button type="submit" w="100%" mt={5} colorScheme="green">
                Register
              </Button>
            </Form>

            <Text mt={5}>
              Already have an account?{' '}
              <Text as="span" color="green.500" fontWeight="bold">
                <Link to="/login">Login</Link>
              </Text>
            </Text>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
