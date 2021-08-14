import React from 'react';
import PropTypes from 'prop-types';

// Bootstrap Components
import {
  Container, Row, Col,
} from 'react-bootstrap';

// Custom Components
import MainNavbar from './MainNavbar';
import SideBar from './SideBar';

const MainLayout = ({ children }) => (
  <div>
    <MainNavbar />
    <Container fluid style={{ height: '90%' }}>
      <Row className="h-100">
        <Col sm={12} md="auto" className="px-0"><SideBar /></Col>
        <Col className="px-0">
          {children}
        </Col>
      </Row>
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

MainLayout.defaultProps = {
  children: {},
};

export default MainLayout;
