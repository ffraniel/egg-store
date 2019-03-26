import React from 'react';
import './CartGrid.css';

const CartGrid = ({
  cart, 
  addToCart, 
  removeFromCart, 
  updatePaymentVisible, 
  updateReserveVisible, 
  paymentVisible, 
  reserveVisible
  }) => {

  var totalCost = 0;
  cart.forEach((item)=>{
    totalCost = totalCost + (item.price * item.quantity);
  });

  let cartHasContent = false;

  if (cart.length > 0) {
    cartHasContent = true;
  };

  let cartHasNoContentClass = "Cart-Button-Not-Available";

  return(
    <div className="CartGrid">
      <div className="CartGrid-Headings">
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
      </div>
      <div className="Cart-Items">
        {cart && cart.length > 0 && cart.map((product, i)=>{
          var itemSubTotal = (product.price * product.quantity).toFixed(2);

          return (
            <section key={product.name + i} className="Cart-Item">
              <h3>{product.name}</h3>
              <h3>{product.price.toFixed(2)}</h3>
              <div className="Cart-Quantity">
                <button className="Cart-Plus Cart-Button" onClick={()=>{addToCart(product, 1)}}>+</button>
                <p>{product.quantity}</p>
                <button className="Cart-Minus Cart-Button" onClick={()=>{removeFromCart(product, 1)}}>-</button>
              </div>
              <h3>{itemSubTotal}</h3>
            </section>
          );

        })}

      </div>
      <div className="CartGrid-Border"></div>
      <div className="CartGrid-Totals">
        <h3>Total</h3>
        <h3>{totalCost.toFixed(2)}</h3>
      </div>

      <div className="CartGrid-Buttons">
        <button className={
          cartHasContent ?
            "CartGrid-Pay CartGrid-Pay-Buttons":
            `CartGrid-Pay CartGrid-Pay-Buttons ${cartHasNoContentClass}`
          } 
          onClick={()=>{
            if (cartHasContent) {
              updatePaymentVisible(!paymentVisible);
            };
        }}>Pay</button>

        <button className={
          cartHasContent ? 
            `CartGrid-Reserve CartGrid-Pay-Buttons` : 
            `CartGrid-Reserve CartGrid-Pay-Buttons ${cartHasNoContentClass}`
          } 
          onClick={()=>{
            if (cartHasContent) {
              updateReserveVisible(!reserveVisible);
            };
        }}>Reserve for Collection</button>

      </div>
      {!cartHasContent ? <p>Nothing in your cart.</p> : null }
    </div>
  )
};

export default CartGrid;