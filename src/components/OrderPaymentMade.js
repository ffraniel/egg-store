import React from "react";
import "./OrderPaymentMade.css";

const OrderPaymentMade = ({order}) => {
  return (
    <div className="Order-Completed-Payment">
      <h3>Thanks for buying our eggs, ${order.name} we appreciate it!</h3>
      <p>We will be in contact soon about your order about when you can collect your order.</p>
    </div>
  );
};

export default OrderPaymentMade;
