import React from 'react';
import './Cart.css';
import EmptyCart from './EmptyCart';

const Cart = ({cartVisible, cart, makeCartVisible, addToCart, removeFromCart, loadingWait, handleNav }) => {
  var cartVisibleClass = cartVisible ? 'Popup-Cart Cart-Visible' : 'Popup-Cart';
  var totalCost = 0;
  cart.forEach((item)=>{
    totalCost = totalCost + (item.price * item.quantity);
  });
  return(
    <section className={cartVisibleClass}>
      <h2>Cart</h2>
      <h1 className="Popup-Minimizer" onClick={()=>{makeCartVisible()}}>X</h1>

      {cartVisible && cart.length === 0 && 
        <EmptyCart />
      }
      <div className="Cart-Grid-Titles">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
      </div>
      {cart.map((product, i)=>{
        var cumulativePrice = (product.price * product.quantity).toFixed(2);
        return (
          <section key={product.name + i} className="Cart-Grid">
            <h3>{product.name}</h3>
            <h3>£{cumulativePrice}</h3>
            <div className="Cart-Incrementer">
              <button onClick={()=>{addToCart(product, 1)}}>+</button>
              <h3 className="Cart-Quantity-Number">{product.quantity}</h3>
              <button onClick={()=>{removeFromCart(product, 1)}}>-</button>
            </div>
          </section>
        );
      })}
      {cart.length > 0 &&
        <section className="Cart-Dashboard">
          <div className="Cart-Dash-Grid">
            <h3>Total </h3>
            <h3>{totalCost.toFixed(2)}</h3>
          </div>
          <button 
            onClick={()=>{ 
              loadingWait();
              handleNav("Checkout");
            }} 
            className="Checkout-Button">
              Checkout
          </button>
        </section>
      }
    </section>
  )
};

export default Cart;