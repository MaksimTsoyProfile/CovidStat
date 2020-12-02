import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import ChartsRecovered from './ChartsRecovered';
import Charts from './Charts';
import ChartsActive from './ChartsAcive';

const CarouselCharts = () => {
  const posts = useSelector((state) => state.data.posts);
  return (posts.length > 0 ? (
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
  ) : (
    null
  ));
};

export default CarouselCharts;
