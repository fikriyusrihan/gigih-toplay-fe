import axios from '../utils/axios';
import { useEffect, useState } from 'react';

const useUser = () => {
  const isLoggedIn = localStorage.getItem('access_token') !== null;
  if (!isLoggedIn) {
    return null;
  }

  const [userInfo, setUserInfo] = useState(null);

  const fetchUserInfo = async () => {
    axios
      .get('/users/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then((res) => {
        const user = res.data.data.user;
        setUserInfo(user);
      });
  };

  useEffect(() => {
    fetchUserInfo().then();
  }, []);

  return userInfo;
};

export default useUser;
