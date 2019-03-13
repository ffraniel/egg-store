import React from 'react';
import './UserNavButton.css';

const UserNavButton = ({handleNav, destination}) => (
  <button className="user-nav-link" onClick={()=>{handleNav(destination);}}>{destination}</button>
);

export default UserNavButton;