import React from 'react';
import './Cart.css';
import EmptyCart from './EmptyCart';

const Cart = (props) => {
  var cartVisibleClass = props.cartVisible ? 'Popup-Cart Cart-Visible' : 'Popup-Cart';
  return(
    <section className={cartVisibleClass}>
      <h2>Cart</h2>
      <h1 className="Popup-Minimizer" onClick={()=>{props.makeCartVisible()}}>X</h1>

      {props.cartVisible && props.cart.length === 0 && 
        <EmptyCart />
      }

      {props.cart.map((product, i)=>{
        return (
          <section key={product.name + i}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
              <button onClick={()=>{props.addToCart(product, 1)}}>+</button>
              <button onClick={()=>{props.removeFromCart(product, 1)}}>-</button>
          </section>
        );
      })}
      {props.cart.length > 0 &&
        <button onClick={()=>{ props.handleNav("checkout") }} className="Checkout-Button">Checkout</button>
      }
    </section>
  )
};

export default Cart;