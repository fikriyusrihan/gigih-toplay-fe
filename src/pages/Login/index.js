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
    email: '',
    password: ''
  });

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/login', form)
      .then((res) => {
        const token = res.data.data.token;
        localStorage.setItem('access_token', token);

        navigate('/');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Navbar />
      <Box mt={{ base: 10, md: 100 }} mx="auto" p={5} w={['90%', '40%']} boxShadow="xs">
        <VStack>
          <Heading as="h1" size="md" textAlign="center">
            Log In to Your Account
          </Heading>
          <Text w="80%" textAlign="center">
            Sign in to your account to continue your shopping journey with ease.
          </Text>

          <VStack w="100%" p={5}>
            <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
              <FormControl isRequired>
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
                Login
              </Button>
            </Form>

            <Text mt={5}>
              Don&apos;t have an account?{' '}
              <Text as="span" color="green.500" fontWeight="bold">
                <Link to="/register">Register</Link>
              </Text>
            </Text>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
