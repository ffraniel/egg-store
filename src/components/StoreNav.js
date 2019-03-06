import React from 'react';
import StoreNavButton from './StoreNavButton';
import './StoreNav.css';

const StoreNav = (props)=>{
  return (
    <nav className="StoreNav">
      <p>Select by</p>
      <StoreNavButton handleStoreNav={props.handleStoreNav} destination={"Number"} storeLocation={props.storeLocation} />
      <StoreNavButton handleStoreNav={props.handleStoreNav} destination={"Rare Breed"} storeLocation={props.storeLocation} />
      <StoreNavButton handleStoreNav={props.handleStoreNav} destination={"All"} storeLocation={props.storeLocation} />
    </nav>
  )
};

export default StoreNav;