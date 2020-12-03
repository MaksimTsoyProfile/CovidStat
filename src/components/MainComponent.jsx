import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TitleComponent from './TitleComponent';
import CarouselCharts from './CarouselCharts';
import BodyComponent from './BodyComponent';
import AlertComponent from './AlertComponent';
import FormApi from './FormApi';

const MainComponent = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <FormApi />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <AlertComponent />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <TitleComponent />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <BodyComponent />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <CarouselCharts />
      </Col>
    </Row>
  </Container>
);

export default MainComponent;
