import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = useContext();

  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
