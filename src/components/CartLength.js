import React from 'react';
import './CartLength.css';

const CartLength = ({cart})=>{
  let itemsLength = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  let backgroundColourClass = itemsLength === 0 ? 'cart-length white-background' : 'cart-length green-background';

  return (
    <span className={backgroundColourClass}>{itemsLength}</span>
  )
}

export default CartLength;