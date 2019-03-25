import React from 'react';
import './OrderCompleted.css';
import OrderReservationMade from './OrderReservationMade';
import OrderPaymentMade from './OrderPaymentMade';

const OrderCompleted = ({order}) => {
  return (
    <div className="Order-Completed">
      <h1>Order Completed</h1>
      <OrderReservationMade order={order} />
      {/* {order.type === 'reservation' && <OrderReservationMade order={order} />}
      {order.type === 'payment' && <OrderPaymentMade order={order} />} */}
    </div>
  )
};

export default OrderCompleted;