import React, { useState } from 'react';
import './ReserveElement.css';

const ReserveElement = ({checkOrderCanBeCompleted, handleNav}) => {
  const [ name, updateName ] = useState('');
  const [ details, updateDetails ] = useState('');
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
    handleNav('Order Completed');
  }

  return (
    <section className="Reserve">
      <h3>Making a reservation</h3>
      <p>In order to reserve your order we will need some details from you</p>

      <form onSubmit={handleCheckReserve}>
        <label>
          Name
          <input
            onChange={e => updateName(e.target.value)}
            type="text" 
            value={name} 
            placeholder="Name" 
            name="name" 
            required
          />
        </label>
        <label>
          Details
          <textarea 
            onChange={(e => updateDetails(e.target.value))}
            type="textarea" 
            value={details} 
            placeholder="When would you be able to collect the eggs" 
            name="name" 
            required
          />
        </label>
        <input className="CartGrid-Pay-Buttons" type="submit" value="Check Order" />
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