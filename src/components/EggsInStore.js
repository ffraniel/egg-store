import React from 'react';
import './EggsInStore.css';

const EggsInStore = ({eggsInStore})=>(
  <div className="EggsInStore">
    <p>There are currently only {eggsInStore} eggs in store availablee for purchase. You have tried to order more than this. Please amend your order and try again.</p>
  </div>
);

export default EggsInStore;