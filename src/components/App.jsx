import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TitleComponent from './TitleComponent';
import HeadComponent from './HeadComponent';
import CarouselCharts from './CarouselCharts';
import BodyComponent from './BodyComponent';
import AlertComponent from './AlertComponent';

const App = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <HeadComponent />
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

export default App;
