import React from 'react';
import { Carousel } from 'react-bootstrap';
import ChartsRecovered from './ChartsRecovered';
import Charts from './Charts';
import ChartsActive from './ChartsAcive';

const CarouselCharts = () => (
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
);

export default CarouselCharts;
