import React from 'react';
import UserNavButton from './UserNavButton';
import './UserNav.css';

const UserNav = (props)=>{
  return (
    <nav className="UserNav">
      <UserNavButton handleNav={props.handleNav} destination={"Home"} />
      <UserNavButton handleNav={props.handleNav} destination={"Meet the Hens"} />
      <UserNavButton handleNav={props.handleNav} destination={"Checkout"} />
      <button className="user-nav-link" onClick={()=>{props.makeCartVisible()}}>Cart</button>
    </nav>
  )
}

export default UserNav;