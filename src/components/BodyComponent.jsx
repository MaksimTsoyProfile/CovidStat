import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import CircleChart from './CircleChart';

const BodyComponent = () => {
  const posts = useSelector((state) => state.data.posts);
  const lastPosts = posts[posts.length - 1];
  return (
    <Container className="text-body py-2">
      <Row>
        {(posts.length > 0) ? (
          <Col md={6} xs={12} >
            <h6>Active:<b>{lastPosts.Active}</b></h6>
            <h6>Confirmed:<b>{lastPosts.Confirmed}</b></h6>
            <h6>Deaths:<b>{lastPosts.Deaths}</b></h6>
            <h6>Recovered:<b>{lastPosts.Recovered}</b></h6>
          </Col>
        ) : (
          null
        )}
          <Col md={6} xs={12}>
            <CircleChart />
          </Col>
        </Row>
      </Container>
  );
};

export default BodyComponent;
