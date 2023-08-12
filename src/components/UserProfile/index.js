import { Avatar, HStack, Icon, Text } from '@chakra-ui/react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import useUser from '../../hooks/useUser';

export default function Index() {
  const userInfo = useUser();

  const handleLogoutClick = () => {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('access_token');
      window.location.reload();
    }
  };

  return (
    <HStack>
      <HStack boxShadow="xs" borderRadius={4} p={2} px={4}>
        <Avatar size="sm" name={userInfo?.username} />
        <Text fontSize="sm" color="gray.500">
          {userInfo?.username}
        </Text>
      </HStack>

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
