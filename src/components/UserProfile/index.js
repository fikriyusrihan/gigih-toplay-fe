import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { FaUser, FaArrowRightFromBracket } from 'react-icons/fa6';

export default function Index() {
  const [user, setUser] = useState({});

  const handleLogoutClick = () => {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('access_token');
      window.location.reload();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    axios
      .get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        const user = res.data.data.user;
        setUser(user);
      });
  }, []);

  return (
    <HStack>
      <Icon as={FaUser} color="gray.500" />
      <Text fontSize="sm" color="gray.500">
        {user.username}
      </Text>

      <Icon
        ml={2}
        as={FaArrowRightFromBracket}
        color="red.500"
        cursor="pointer"
        onClick={handleLogoutClick}
      />
    </HStack>
  );
}
