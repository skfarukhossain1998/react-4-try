
// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';
import arrow from './arrow.png';
import './home.css'; // Import the home.css file
const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults(posts);
    } else {
      setSearchResults(posts.filter(post => post.id.toString().includes(searchTerm)));
    }
  }, [searchTerm, posts]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home-page">
      <h1>Social Media For Traveller</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by ID..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="post-cards">
        {searchResults.map(post => (
          <div key={post.id} className="post-card">
            <img style={{ width: "100%", height: "50%" }} src={post.imgSrc} alt={`Post ${post.id}`} />
            
            <div className='paraImg'>  
                  <div className="post-details">
                    <h3>{post.title.slice(0, 30)}{post.title.length > 20}...</h3>
                    <p>{post.body.slice(0, 100)}{post.body.length > 80},<Link  className='readMore' to={`/item/${post.id}`}>Read More </Link>
                    </p>
                  </div>
                  <div className='next'>
                    <Link className='imgTag ' to={`/item/${post.id}`}>
                      <img src={arrow} style={{ width: "30px" , height: "50px"}} alt={`Post ${post.id}`} />
                    </Link>
                  </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
