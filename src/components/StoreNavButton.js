import React from 'react';
import './StoreNavButton.css';

const StoreNavButton = (props) => {
  var storeNavButtonClass = props.destination === props.storeLocation ? "store-nav-link highlighted-store-link" : "store-nav-link";
  return (
    <button className={storeNavButtonClass} onClick={()=>{props.handleStoreNav(props.destination);}}>{props.destination}</button>
  )
};

export default StoreNavButton;