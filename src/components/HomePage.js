import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body.slice(0, 100)}{post.body.length > 100 && '... Read More'}</p>
          <Link to={`/item/${post.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
