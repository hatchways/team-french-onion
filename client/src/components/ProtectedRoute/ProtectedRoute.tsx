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
  let isLoggedInAndVerified = false;

  if (loggedInUser) {
    const { username } = loggedInUser;
    if (username) {
      fetch(`http://localhost:3001/searchUsers?search=${username}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.users[0]) {
            isLoggedInAndVerified = true;
          }
        })
        .catch((err) => {
          return <Redirect to="/login" />;
        });
    }
  }
  return <Route {...restOfProps} render={() => (isLoggedInAndVerified ? children : <Redirect to="/login" />)} />;
};
export default ProtectedRoute;
