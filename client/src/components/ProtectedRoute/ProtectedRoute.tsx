import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { ComponentType } from 'react';
=======

>>>>>>> parent of a84de55 (Update ProtectedRoute.tsx)
type Props = {
  path: string;
  exact: boolean;
  component: ComponentType;
};
const ProtectedRoute: React.FC<Props> = ({ component, ...restOfProps }) => {
  const { loggedInUser } = useAuth();
<<<<<<< HEAD
  const isLoggedInAndValid = loggedInUser && loggedInUser.username && loggedInUser.email;

  return isLoggedInAndValid ? <Route component={component} {...restOfProps} /> : <Redirect to="/login" />;
=======
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
>>>>>>> parent of a84de55 (Update ProtectedRoute.tsx)
};
export default ProtectedRoute;
