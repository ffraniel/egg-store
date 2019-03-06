import React from 'react';
import './Cart.css';

const Cart = (props) => {
  var cartVisibleClass = props.cartVisible ? 'Popup-Cart Cart-Visible' : 'Popup-Cart';
  return(
    <section className={cartVisibleClass}>
      <h4>Your Cart contains {props.cart.length || "no"} products</h4>
      <button onClick={()=>{ props.handleNav("checkout") }} className="Checkout-Button">Checkout</button>
    </section>
  )
};

export default Cart;