import React, { useState } from 'react';
import './Checkout.css';
import CartGrid from './CartGrid';

const Checkout = ({cart, addToCart, removeFromCart}) => {
  const [paymentVisible, updatePaymentVisible] = useState(false);
  const [reserveVisible, updateReserveVisible] = useState(false);

  return (
    <div className="Checkout">
      <section className="Checkout-Container">
        <h1 className="Checkout-Title">Checkout</h1>
        <div className="Checkout-Border"></div>
        <CartGrid 
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updatePaymentVisible={updatePaymentVisible}
          updateReserveVisible={updateReserveVisible}
          paymentVisible={paymentVisible}
          reserveVisible={reserveVisible}
        />
        {paymentVisible && <p>Showing Payment</p>}
        {reserveVisible && <p>Showing Reserve</p>}
      </section>
    </div>
  );
};

export default Checkout;