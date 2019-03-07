import React from 'react';
import './Store.css';
import StoreOptions from './StoreOptions';

const Store = (props)=>{
  return(
    <div className="Store-container">
      <div className="Store-inner">
        <StoreOptions 
          addToCart={props.addToCart} 
          removeFromCart={props.removeFromCart}
          handleNav={props.handleNav}
          loadingWait={props.loadingWait}
        />
      </div>
    </div>
  )
}

export default Store;