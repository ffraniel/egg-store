import React from 'react';
import './Store.css';
import StoreOptions from './StoreOptions';

const Store = ({addToCart, removeFromCart, handleNav, loadingWait})=>{
  return(
    <div className="Store-container">
      <div className="Store-inner">
        <StoreOptions 
          addToCart={addToCart} 
          removeFromCart={removeFromCart}
          handleNav={handleNav}
          loadingWait={loadingWait}
        />
      </div>
    </div>
  )
}

export default Store;