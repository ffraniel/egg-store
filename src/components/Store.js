import React from 'react';
import './Store.css';
import StoreNav from './StoreNav';
import StoreOptions from './StoreOptions';

const Store = (props)=>{
  return(
    <div className="Store-container">
      <div className="Store-inner">
        <h1>Order your eggs ready for collection here</h1>
        <p>It couldn't be easier</p>
        <p>If you wish you can pay online</p>
        <div className="Store-border"></div>
        <h2>{props.location}</h2>
        <StoreNav handleStoreNav={props.handleStoreNav} storeLocation={props.storeLocation} />
        <StoreOptions storeLocation={props.storeLocation} />
      </div>
    </div>
  )
}

export default Store;