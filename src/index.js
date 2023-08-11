import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Video, { loader as videoLoader } from './pages/Video';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/videos/:videoId',
    loader: videoLoader,
    element: <Video />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
