import React, { useState } from 'react';
import './ReserveElement.css';

const ReserveElement = ({
    checkOrderCanBeCompleted,
    submitOrder,
    handleNav
  }) => {
  const [ name, updateName ] = useState('');
  const [ details, updateDetails ] = useState('');
  const [ email, updateEmail ] = useState('');
  const [ telephone, updateTelephone ] = useState('');
  const [ showReserveButton, updateShowReserveButton ] = useState(false);

  const handleCheckReserve = (e) => {
    e.preventDefault();
    console.log(`submitting details of ${name} for ${details}.`);
    if(checkOrderCanBeCompleted()){
      console.log("it can be completed")
      updateShowReserveButton(true);
    } else{
      updateShowReserveButton(false);
      console.log("it can't be done")
    };
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault(); 
    console.log("LAST SUBMISSION HERE");
    // bring down order creation order from app.js
    submitOrder({
      name: name, 
      details: details,
      paid: false,
      email: email,
      telephone: telephone
    });
  }

  return (
    <section className="Reserve">
      <h3>Making a reservation</h3>
      <p>In order to reserve your order we will need some details from you</p>
      <p>* items required.</p>

      <form onSubmit={handleCheckReserve}>
        <label className="reserve-label" for="name">Name *</label>
          <input 
            className="reserve-input reserve-text"
            onChange={e => updateName(e.target.value)}
            type="text" 
            value={name} 
            placeholder="Name" 
            name="name" 
            required
          />
        <label className="reserve-label" for="email">Email</label>
          <input 
            className="reserve-input reserve-text"
            onChange={e => updateEmail(e.target.value)}
            type="text" 
            value={email} 
            placeholder="Email" 
            name="email" 
          />
        <label className="reserve-label" for="telephone">Telephone *</label>
          <input 
            className="reserve-input reserve-text"
            onChange={e => updateTelephone(e.target.value)}
            type="text" 
            value={telephone} 
            placeholder="Telephone" 
            name="telephone" 
            required
          />  
        <label className="reserve-label" for="details">Details</label>
          <textarea 
            className="reserve-input reserve-textarea"
            onChange={(e => updateDetails(e.target.value))}
            type="textarea" 
            value={details} 
            placeholder="Reservation details" 
            name="details" 
          />
        
        <input className="CartGrid-Pay-Buttons" type="submit" value="Check Availability" />
      </form>

      {showReserveButton && 
        <form className="Reserve-Button-Form" onSubmit={handleSubmitOrder}>
          <input type="submit" className="CartGrid-Pay-Buttons" value="Reserve Your Eggs"/>
        </form>
      }

    </section>
  );
};

export default ReserveElement;