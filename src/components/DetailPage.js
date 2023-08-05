/* // src/components/DetailPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);
  const post = posts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const [showDetails, setShowDetails] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setShowUserInfo(false);
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
    setShowDetails(false);
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>Detail Page</h1>
      <h2>Post Number #{post.id}</h2>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Image for Post #${post.id}`} />

      <div>
        <button onClick={toggleDetails}>Show Details</button>
        <button onClick={toggleUserInfo}>Show User Info</button>
      </div>

      <div>
        {showDetails && (
          <div>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
          </div>
        )}

        {showUserInfo && (
          <div>
            <p>User ID: {post.userId}</p>
          </div>
        )}
      </div>

      <h1>More Posts</h1>
      <div>
        {posts.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{`${item.body.slice(0, 100)}...`}</p>
            <a href={`/item/${item.id}`}>Read More...</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
 */

// src/components/DetailPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const post = useSelector(state =>
    state.posts.find(post => post.id === parseInt(id))
  );

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
}

export default DetailPage;

