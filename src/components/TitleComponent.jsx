import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../slices/data';
import { startLoading } from '../loading';

const TitleComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts);
  const lastPosts = posts[posts.length - 1];
  useLayoutEffect(() => {
    startLoading();
    dispatch(getPosts());
  }, []);
  return (posts.length > 0 ? (
      <div>
        <div className="text-title py-2">
          <h2>{lastPosts.Country}</h2>
          <h6>{lastPosts.Date.slice(0, 10)}</h6>
        </div>
      </div>
  ) : (
    null
  ));
};

export default TitleComponent;
