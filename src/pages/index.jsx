import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import styled from 'styled-components';

// Bootstrap Components
import { Container, Col, Row } from 'react-bootstrap';

// Custom Components
import MainLayout from '../components/MainLayout';

// Styled Components
const StyledHeading = styled.h1`
  font-weight: 600
`;

// markup
const IndexPage = () => (
  <div style={{ height: '100%' }}>
    <MainLayout>
      <Container style={{ marginTop: '10px' }}>
        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col>
            <section>
              <StyledHeading>Welcome to the Brewhub API!</StyledHeading>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section>
              <h2>About</h2>
              <p>
                {`
                The Brewhub API was created to provide easy and free access to Canadian brewery data.
                Since (as per usual) nobody cares about or even acknowledges Canada's existence,
                I felt the need to create my own API and support our booming brewery industry.
                `}
              </p>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section>
              <h2>Contributions</h2>
              <p>
                {`
                This project is looking for contributors for maintenence and for populating 
                the database. If you are a brewery, please check out http://brewhub.vercel.app and
                see if you are listed! If you are not, please get in contact!
                `}
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  </div>
);

export default IndexPage;
