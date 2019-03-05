import React from 'react';
import StoreNavButton from './StoreNavButton';
import './StoreNav.css';

const StoreNav = (props)=>{
  return (
    <nav className="StoreNav">
      <StoreNavButton handleStoreNav={props.handleStoreNav} destination={"Eggs"} />
      <StoreNavButton handleStoreNav={props.handleStoreNav} destination={"Fish"} />
    </nav>
  )
};

export default StoreNav;