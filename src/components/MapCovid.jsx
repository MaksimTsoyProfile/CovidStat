import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorldMap from './WorldMap';
import WorldStat from './WorldStat';
import 'leaflet/dist/leaflet.css';

const MapCovid = () => (
  <Container>
    <Row>
      <Col>
        <WorldStat />
      </Col>
    </Row>
    <Row>
      <Col>
        <WorldMap />
      </Col>
    </Row>
  </Container>
);

export default MapCovid;
