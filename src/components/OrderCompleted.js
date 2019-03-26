import React from 'react';
import './OrderCompleted.css';
import OrderReservationMade from './OrderReservationMade';
import OrderPaymentMade from './OrderPaymentMade';

const OrderCompleted = ({order, handleNav}) => {
  return (
    <div className="Order-Completed">
      <div className="Order-Completed-Inner">
        <h1>Order Completed</h1>
        {order.paid && <OrderPaymentMade order={order} />} 
        {!order.paid && <OrderReservationMade order={order} />}    
        <button className="Completed-Back-Button" onClick={()=>{handleNav('Home')}} >Back</button>
      </div>
    </div>
  )
};

export default OrderCompleted;