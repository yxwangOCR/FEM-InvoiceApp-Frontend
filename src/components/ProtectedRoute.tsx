import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from './AppProviders';

const ProtectedRoute: React.FC<Props> = ({ toPath, children }) => {
  const { user } = useAuthContext();

  if (user) {
    return children;
  }

  return <Navigate replace
    to={toPath} />;
};

export default ProtectedRoute;

export interface Props {
  children: React.ReactElement;
  toPath: string;
}
