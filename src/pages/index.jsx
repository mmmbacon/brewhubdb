import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import styled from 'styled-components';

// Bootstrap Components
import {
  Container, Col, Row, Table,
} from 'react-bootstrap';

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
      <Container style={{ margin: 10 }}>
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
                The Brewhub API was created to provide easy and open access to Canadian brewery data.
                I was motivated to create this API because there currently was nothing existing, or easily accessible for Canadian brewers.
                
                This API is currently used on the Brewhub brewery browser application.
                `}
              </p>
              <p>
                <a href="http://brewhub.vercel.app">
                  {`
                http://brewhub.vercel.app
                `}
                </a>
              </p>
              <p>
                {`I am currently populating the dataset with breweries 
                so please note that the data is mostly incomplete.`}
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
                This project is looking for contributors for maintenence, new features and for populating 
                the dataset. If you are a brewery, please check out http://brewhub.vercel.app and
                see if you are listed! If you are not, please get in contact!
                `}
              </p>
              <h4>Contributors</h4>
              <p>
                <div style={{ margin: 40 }}>
                  <a href="http://github.com/mmmbacon" target="empty">
                    <img src="https://github.com/mmmbacon.png?size=150" alt="profile" style={{ borderRadius: 1500 }} />
                  </a>
                </div>
              </p>
            </section>
          </Col>
        </Row>

        <Row>
          <Col>
            <section>
              <h2>Roadmap</h2>
              <p>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Action</th>
                      <th>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Complete</td>
                      <td>Build the Initial API</td>
                      <td />
                    </tr>
                    <tr>
                      <td>In Progress</td>
                      <td>Gather dataset</td>
                      <td />
                    </tr>
                    <tr>
                      <td>Not Started</td>
                      <td>Unit Testing</td>
                      <td />

                    </tr>
                  </tbody>
                </Table>
              </p>
            </section>
          </Col>
        </Row>

      </Container>
    </MainLayout>
  </div>
);

export default IndexPage;
