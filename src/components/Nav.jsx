import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nav = () => (
    <Container className="logo p-0 p-2">
      <Row>
        <Col>
          <Link to='/'>
            <h4>CoviDStaT</h4>
          </Link>
        </Col>
        <Col>
          <Link to='/map'>
            <h4 id="map-text">Map</h4>
          </Link>
        </Col>
      </Row>
    </Container>
);

export default Nav;
