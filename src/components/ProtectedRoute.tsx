import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from './AppProviders';
import { AuthLayout } from './Layout';

const ProtectedRoute: React.FC<Props> = ({ toPath, children }) => {
  const { user } = useAuthContext();

  if (user) {
    return (
      <AuthLayout>
        {children}
      </AuthLayout>
    );
  }

  return (
    <Navigate
      replace
      to={toPath}
    />
  );
};

export default ProtectedRoute;

export interface Props {
  children: React.ReactElement;
  toPath: string;
}
