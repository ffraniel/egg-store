import React, { useState } from 'react';
import './ReserveElement.css';

const ReserveElement = () => {
  const [ name, updateName ] = useState('');
  const [ details, updateDetails ] = useState('');

  const handleSubmitReserve = (e) => {
    e.preventDefault();
    console.log(`submitting details of ${name} for ${details}.`);
    updateName('');
    updateDetails('');
  };

  return (
    <section className="Reserve">
      <h3>Making a reservation</h3>
      <p>In order to reserve your order we will need some details from you</p>

      <form onSubmit={handleSubmitReserve}>
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
          />
        </label>
        <input className="CartGrid-Pay-Buttons" type="submit" value="Check Order" />
      </form>
    </section>
  );
};

export default ReserveElement;