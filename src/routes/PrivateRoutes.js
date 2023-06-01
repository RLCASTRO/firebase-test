import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/FirebaseAuthContext';

export const PrivateRoutes = ({ children }) => {
  const { user } = UserAuth();
  console.log('from private route ', user);

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default PrivateRoutes;
