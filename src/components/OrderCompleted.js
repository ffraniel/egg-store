import React from 'react';
import './OrderCompleted.css';
import OrderReservationMade from './OrderReservationMade';
import OrderPaymentMade from './OrderPaymentMade';

const OrderCompleted = ({order, handleNav}) => {
  return (
    <div className="Order-Completed">
      <div className="Order-Completed-Inner">
        <h1>Order Completed</h1>
        <OrderReservationMade order={order} />
        {/* {order.type === 'reservation' && <OrderReservationMade order={order} />}
        {order.type === 'payment' && <OrderPaymentMade order={order} />} */}
        <button className="Completed-Back-Button" onClick={()=>{handleNav('Home')}} >Back</button>
      </div>
    </div>
  )
};

export default OrderCompleted;