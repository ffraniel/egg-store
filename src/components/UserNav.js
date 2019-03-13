import React from 'react';
import UserNavButton from './UserNavButton';
import './UserNav.css';

const UserNav = ({handleNav, makeCartVisible})=>{
  return (
    <nav className="UserNav">
      <UserNavButton handleNav={handleNav} destination={"Home"} />
      <UserNavButton handleNav={handleNav} destination={"Meet the Hens"} />
      <UserNavButton handleNav={handleNav} destination={"Checkout"} />
      <button className="user-nav-link" onClick={()=>{makeCartVisible()}}>Cart</button>
    </nav>
  )
}

export default UserNav;