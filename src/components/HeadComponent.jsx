import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormApi from './FormApi';

const HeadComponent = () => (
  <Container className="logo p-0" >
    <Row>
      <Col xs={12} md={4}>
        <h4>CoviDStaT</h4>
      </Col>
      <Col xs={12} md={8}>
        <FormApi />
      </Col>
    </Row>
  </Container>
);

export default HeadComponent;
