import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import authRoutes from '@/pages/auth';
import invoicesRoutes from '@/pages/invoices';
import NotFoundPage from '@/pages/NotFoundPage';

const App: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/invoices" />,
    },
    {
      path: '/invoices',
      children: invoicesRoutes,
    },
    {
      path: '/auth',
      children: authRoutes,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};

export default App;
