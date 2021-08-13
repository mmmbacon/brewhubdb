import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

// Bootstrap Components
import {
  Container, Row, Col,
} from 'react-bootstrap';

// Custom Components
import MainNavbar from '../components/MainNavbar';
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';

// markup
const IndexPage = () => (
  <div style={{ height: '100%' }}>
    <MainNavbar />
    <Container fluid style={{ height: '90%' }}>
      <Row className="h-100">
        <Col xs={2} className="px-0"><SideBar /></Col>
        <Col className="px-0"><MainContent /></Col>
      </Row>
    </Container>
  </div>
);

export default IndexPage;
