import { useContext } from 'react';
import { Container, Loader } from 'rsuite';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const { profile, isLoading } = useContext();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (!profile && !isLoading) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
