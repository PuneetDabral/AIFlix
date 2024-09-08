import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './login';
import Browser from './browse';

const Body = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    {
      path: '/browser',
      element: <Browser />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
