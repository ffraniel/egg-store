import React from 'react';
import './Cart.css';
import EmptyCart from './EmptyCart';

const Cart = (props) => {
  var cartVisibleClass = props.cartVisible ? 'Popup-Cart Cart-Visible' : 'Popup-Cart';
  // var totalCost = props.cart.reduce((acc, currentVal, currentInd, array)=>{
  //   console.log("acc: ", acc)
  //   return acc + (currentVal.price * currentVal.quantity).toFixed(2);
  // }, 0);
  var totalCost = 0;
  props.cart.forEach((item)=>{
    totalCost = totalCost + (item.price * item.quantity);
  });
  return(
    <section className={cartVisibleClass}>
      <h2>Cart</h2>
      <h1 className="Popup-Minimizer" onClick={()=>{props.makeCartVisible()}}>X</h1>

      {props.cartVisible && props.cart.length === 0 && 
        <EmptyCart />
      }
      <div className="Cart-Grid-Titles">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
      </div>
      {props.cart.map((product, i)=>{
        var cumulativePrice = (product.price * product.quantity).toFixed(2);
        return (
          <section key={product.name + i} className="Cart-Grid">
            <h3>{product.name}</h3>
            <h3>£{cumulativePrice}</h3>
            <div className="Cart-Incrementer">
              <button onClick={()=>{props.addToCart(product, 1)}}>+</button>
              <h3 className="Cart-Quantity-Number">{product.quantity}</h3>
              <button onClick={()=>{props.removeFromCart(product, 1)}}>-</button>
            </div>
          </section>
        );
      })}
      {props.cart.length > 0 &&
        <section className="Cart-Dashboard">
          <div className="Cart-Dash-Grid">
            <h3>Total </h3>
            <h3>{totalCost.toFixed(2)}</h3>
          </div>
          <button 
            onClick={()=>{ 
              props.loadingWait();
              props.handleNav("Checkout");
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