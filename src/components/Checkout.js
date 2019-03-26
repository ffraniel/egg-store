import React, { useState } from 'react';
import './Checkout.css';
import CartGrid from './CartGrid';
import PaymentElement from './PaymentElement';
import ReserveElement from './ReserveElement';

const Checkout = ({
    cart, 
    addToCart, 
    removeFromCart, 
    checkOrderCanBeCompleted,
    submitOrder
  }) => {
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
        {paymentVisible && cart.length > 0 && 
          <PaymentElement 
            checkOrderCanBeCompleted={checkOrderCanBeCompleted}
            submitOrder={submitOrder}
        />}
        {reserveVisible && cart.length > 0 && 
          <ReserveElement 
            checkOrderCanBeCompleted={checkOrderCanBeCompleted}
            submitOrder={submitOrder}
        />}
      </section>
    </div>
  );
};

export default Checkout;