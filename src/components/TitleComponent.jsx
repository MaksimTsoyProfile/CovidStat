import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import chart from '../chart';
import { getPosts } from '../slices/data';
import circleChart from '../circleChart';
import { startLoading } from '../loading';

const TitleComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts);
  const lastPosts = posts[posts.length - 1];
  const filterPosts = posts.filter((post) => (post.Date.slice(8, 10) === '01'));
  const mounthsDeath = filterPosts.map((post) => post.Deaths);
  const mounthsActive = filterPosts.map((post) => post.Active);
  const mounthsRecovered = filterPosts.map((post) => post.Recovered);
  const mounthsDate = filterPosts.map((post) => post.Date.slice(0, 7));
  useLayoutEffect(() => {
    startLoading();
    dispatch(getPosts());
  }, []);
  if (posts.length > 0) {
    chart({
      mounthsDate, mounthsActive, mounthsDeath, mounthsRecovered,
    });
    circleChart({ lastPosts });
    return (
      <div>
        <div className="text-title py-2">
          <h2>{lastPosts.Country}</h2>
          <h6>{lastPosts.Date.slice(0, 10)}</h6>
        </div>
      </div>
    );
  }
  return null;
};

export default TitleComponent;
