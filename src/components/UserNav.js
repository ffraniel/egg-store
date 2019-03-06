import React from 'react';
import UserNavButton from './UserNavButton';
import './UserNav.css';

const UserNav = (props)=>{
  return (
    <nav className="UserNav">
      <UserNavButton handleNav={props.handleNav} destination={"Login"} />
      <UserNavButton handleNav={props.handleNav} destination={"Checkout"} />
      <UserNavButton handleNav={props.handleNav} destination={"Account"} />
      <button className="user-nav-link" onClick={()=>{props.makeCartVisible()}}>Basket</button>
    </nav>
  )
}

export default UserNav;