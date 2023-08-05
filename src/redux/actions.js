// src/redux/actions.js
/* import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const fetchPosts = () => async dispatch => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error });
    }
  }; */


  // src/actions.js
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const postsWithImages = response.data.map(post => ({
      ...post,
      imgSrc: `https://picsum.photos/200?random=${post.id}`
    }));
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: postsWithImages });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error });
  }
};
