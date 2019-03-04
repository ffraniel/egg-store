import React from 'react';
import './UserNavButton.css';

const UserNavButton = (props) => (
  <button className="user-nav-link" onClick={()=>{props.handleNav(props.destination);}}>{props.destination}</button>
);

export default UserNavButton;