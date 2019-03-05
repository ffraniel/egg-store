import React from 'react';
import './StoreNavButton.css';

const StoreNavButton = (props) => (
  <button className="store-nav-link" onClick={()=>{props.handleStoreNav(props.destination);}}>{props.destination}</button>
);

export default StoreNavButton;