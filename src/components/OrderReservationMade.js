import React from 'react';
import './OrderReservationMade.css';

const OrderReservationMade = ({order}) => {
  return (
    <div className="Order-Completed-Reservation">
      <h3>Thanks for making a reservation for eggs {order.name}</h3>
      <p>We will be in contact soon about your order</p>
    </div>
  )
};

export default OrderReservationMade;