import React from 'react';
import UserNavButton from './UserNavButton';
import './UserNav.css';
import CartLength from './CartLength';

const UserNav = ({handleNav, makeCartVisible, cart})=>{
  return (
    <nav className="UserNav">
      <UserNavButton handleNav={handleNav} destination={"Home"} />
      <UserNavButton handleNav={handleNav} destination={"Meet the Hens"} />
      <UserNavButton handleNav={handleNav} destination={"Checkout"} />
      <button className="user-nav-link" onClick={()=>{makeCartVisible()}}>
        Cart
        <CartLength cart={cart}/>
      </button>
    </nav>
  )
}

export default UserNav;