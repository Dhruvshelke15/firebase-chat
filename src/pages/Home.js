import { Grid, Row, Col } from 'rsuite';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Grid fluid classname="h-100">
      <Row>
        <Col xs={24} md={8}>
          home
          <Sidebar />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
