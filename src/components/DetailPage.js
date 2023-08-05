
// src/components/DetailPage.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserDetails from './UserDetails';
import { Link } from 'react-router-dom';
import MorePost from './MorePost'
import './details.css'; // Import the home.css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const DetailPage = () => {
  const { posts } = useSelector((state) => state);

  const { id } = useParams();
  const post = useSelector(state =>
   
    state.posts.find(post => post.id === parseInt(id))
    
  );

  const [selectedTab, setSelectedTab] = useState('details');

  if (!post) {
    
    return <div>Loading...</div>;
  }

  return (
    <div className='allPart'>
      <div className='userInfo '>

        <div className='tagImg'>
            <h2>  <Link to="/"><i class="fa-solid fa-circle-arrow-left" style={{color: "#88aaaa"}}></i></Link> {`Post number #${post.id}`}</h2>
            <div className='contain'>
              <img src={post.imgSrc} alt={`Post ${post.id}`} />
             <div class="centered">{post.title}</div>
            </div>
          </div> {/* Tag and Image */}


            <div className='btnBody'>
              <div className='btn'>
              <button className='btn1 fixed' onClick={() => setSelectedTab('details')}>Details</button>
              <button className='btn1' onClick={() => setSelectedTab('userDetails')}>User Info</button>
            </div>
          
          {selectedTab === 'details' && (
            <div className='userBody'>
                 
                  <p>{post.body}</p>
             </div>
              )}
              {selectedTab === 'userDetails' && <UserDetails userId={post.userId} />}
             
              </div> 
            </div>{/* User Info */}




      <div>
        <h1>More Posts</h1>
        <MorePost /> {/* impot the More Post File  */}
      </div>

    </div>
  );
};

export default DetailPage;
