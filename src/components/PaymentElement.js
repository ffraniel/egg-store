import React, { useState } from "react";
import "./PaymentElement.css";

const PaymentElement = ({
  checkOrderCanBeCompleted,
  submitOrder,
  handleNav
}) => {
  const [name, updateName] = useState("");
  const [details, updateDetails] = useState("");
  const [email, updateEmail] = useState("");
  const [telephone, updateTelephone] = useState("");
  const [showPaymentButton, updateShowPaymentButton] = useState(false);

  const handleCheckReserve = e => {
    e.preventDefault();
    if (name && (telephone || email || details)) {
      if (checkOrderCanBeCompleted()) {
        updateShowPaymentButton(true);
      } else {
        updateShowPaymentButton(false);
      }
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log("You're trying to submit");
    //   submitOrder({
    //     name: name,
    //     details: details,
    //     paid: true,
    //     email: email,
    //     telephone: telephone
    //   });
  };

  return (
    <section className="Payment">
      <h3>Pay for Eggs</h3>
      <p>In order to make your order we will need some details from you</p>
      <p>* items required.</p>

      <form onSubmit={handleCheckReserve}>
        <label className="payment-label" htmlFor="name">
          Name *
        </label>
        <input
          className="payment-input payment-text"
          onChange={e => updateName(e.target.value)}
          type="text"
          value={name}
          placeholder="Name"
          name="name"
          required
        />
        <label className="payment-label" htmlFor="email">
          Email
        </label>
        <input
          className="payment-input payment-text"
          onChange={e => updateEmail(e.target.value)}
          type="text"
          value={email}
          placeholder="Email"
          name="email"
          required
        />
        <label className="payment-label" htmlFor="telephone">
          Telephone *
        </label>
        <input
          className="payment-input payment-text"
          onChange={e => updateTelephone(e.target.value)}
          type="text"
          value={telephone}
          placeholder="Telephone"
          name="telephone"
          required
        />
        <label className="payment-label" htmlFor="details">
          Details
        </label>
        <textarea
          className="payment-input payment-textarea"
          onChange={e => updateDetails(e.target.value)}
          type="textarea"
          value={details}
          placeholder="Purchase details"
          name="details"
        />
        <input
          className="CartGrid-Pay-Buttons"
          type="submit"
          value="Check Availability"
        />
      </form>

      {showPaymentButton && 
        <form className="Reserve-Button-Form" onSubmit={handleSubmitOrder}>
          <h4>The eggs are available. Click below to complete the order.</h4>

          <input
            type="submit"
            className="CartGrid-Pay-Buttons"
            value="Purchase Your Eggs"
          />
        </form>
      }
    </section>
  );
};

export default PaymentElement;
