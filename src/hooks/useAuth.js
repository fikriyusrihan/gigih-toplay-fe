import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkIsLoggedIn = () => {
    const token = localStorage.getItem('access_token');
    return !!token;
  };

  useEffect(() => {
    setIsLoggedIn(checkIsLoggedIn());
  }, []);

  return isLoggedIn;
};

export default useAuth;
