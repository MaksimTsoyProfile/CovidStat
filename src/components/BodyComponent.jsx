import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import chart from '../chart';
import { getPosts } from '../slices/data';

const BodyComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts);
  const lastPosts = posts[posts.length - 1];
  const filterPosts = posts.filter((post) => (post.Date.slice(8, 10) === '01'));
  const mounthsDeath = filterPosts.map((post) => post.Deaths);
  const mounthsActive = filterPosts.map((post) => post.Active);
  const mounthsRecovered = filterPosts.map((post) => post.Recovered);
  const mounthsDate = filterPosts.map((post) => post.Date.slice(0, 7));
  useLayoutEffect(() => {
    dispatch(getPosts());
  }, []);
  if (posts.length > 0) {
    chart({
      mounthsDate, mounthsActive, mounthsDeath, mounthsRecovered,
    });
    return (
      <Card>
        <Card.Img variant="top" src="img/body.jpg" />
        <Card.Body>
          <h6>Country:{lastPosts.Country}</h6>
          <h6>Date:{lastPosts.Date.slice(0, 10)}</h6>
          <h6>Active:{lastPosts.Active}</h6>
          <h6>Confirmed:{lastPosts.Confirmed}</h6>
          <h6>Deaths:{lastPosts.Deaths}</h6>
          <h6>Recovered{lastPosts.Recovered}</h6>
        </Card.Body>
      </Card>
    );
  }
  return null;
};

export default BodyComponent;
