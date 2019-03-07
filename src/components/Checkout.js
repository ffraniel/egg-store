import React from 'react';
import './Checkout.css';
import CartGrid from './CartGrid';

const Checkout = (props) => {
  return (
    <div className="Checkout">
      <section className="Checkout-Container">
        <h1 className="Checkout-Title">Checkout</h1>
        <div className="Checkout-Border"></div>
        <CartGrid 
          cart={props.cart}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      </section>
    </div>
  );
};

export default Checkout;