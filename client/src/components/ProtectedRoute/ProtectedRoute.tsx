import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Route, Redirect } from 'react-router-dom';
type Props = {
  children: JSX.Element;
  path: string;
  exact: boolean;
};
const ProtectedRoute: React.FC<Props> = ({ children, ...restOfProps }) => {
  const { loggedInUser } = useAuth();
  let isLoggedInAndValid = false;

  if (loggedInUser && loggedInUser.username && loggedInUser.email) {
    isLoggedInAndValid = true;
  }

  return <Route {...restOfProps} render={() => (isLoggedInAndValid ? children : <Redirect to="/login" />)} />;
};
export default ProtectedRoute;
