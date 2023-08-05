import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom'; // Import NavLink
const Navbar = () => {
  return (
    <div className='all'>
       
    <div className="navbar"> 

    <div className='left'>
       
        <p>TravelMedia.in</p>
       
        </div>
     
      <ul className='middle'>     
        <li>
        <NavLink exact to="/" activeClassName="active-link">
        <i style={{color: "#F05A22"}} class="fa-solid fa-house"></i>
          </NavLink>
        {/*   <Link to="/"></Link> */}
        </li>
        <li>
           <NavLink exact to="/" activeClassName="active-link"><i style={{color: "#F05A22"}} class="fa-regular fa-bell"></i> </NavLink>
        </li>
        <li>
           <NavLink exact to="/" activeClassName="active-link"><i style={{color: "#F05A22"}} class="fa-solid fa-tag"></i> </NavLink>
        </li>
        <li>
        <NavLink style={{color: "#F05A22"}} exact to="/" activeClassName="active-link"><i class="fa-regular fa-user"></i> </NavLink>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;

/* import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/cats" activeClassName="active-link">
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="/sheeps" activeClassName="active-link">
            Sheeps
          </NavLink>
        </li>
        <li>
          <NavLink to="/goats" activeClassName="active-link">
            Goats
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
 */