// src/components/UserDetails.js
import React from 'react';
import './details.css'
const UserDetails = ({ userId }) => {
  return (
    <div>
      <h3>Post Was posted By : {userId}</h3>
    </div>
  );
};

export default UserDetails;
