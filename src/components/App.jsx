import React from 'react';
import {
  Container, Row, Col, Carousel,
} from 'react-bootstrap';
import BodyComponent from './BodyComponent';
import HeadComponent from './HeadComponent';
import Charts from './Charts';
import ChartsActive from './ChartsAcive';
import ChartsRecovered from './ChartsRecovered';

const App = () => (
  <Container>
    <Row>
      <Col>
        <HeadComponent />
      </Col>
    </Row>
    <Row>
      <Col>
        <BodyComponent />
      </Col>
    </Row>
    <Row>
      <Col>
        <Carousel>
          <Carousel.Item>
            <Charts />
          </Carousel.Item>
          <Carousel.Item>
            <ChartsActive />
          </Carousel.Item>
          <Carousel.Item>
            <ChartsRecovered />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default App;
