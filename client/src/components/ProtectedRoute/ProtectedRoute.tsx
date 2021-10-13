import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Route, Redirect } from 'react-router-dom';
import { ComponentType } from 'react';

type Props = {
  path: string;
  exact: boolean;
  component: ComponentType;
};

const ProtectedRoute: React.FC<Props> = ({ component, ...restOfProps }) => {
  const { loggedInUser } = useAuth();

  const isLoggedInAndValid = loggedInUser && loggedInUser.username && loggedInUser.email;

  return isLoggedInAndValid ? <Route component={component} {...restOfProps} /> : <Redirect to="/login" />;
};

export default ProtectedRoute;
