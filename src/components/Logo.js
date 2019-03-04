import React from 'react';
import './Logo.css';

const Logo = (props)=> (
  <section className="Logo-container" onClick={()=>{ props.handleNav('Home')}}>
    <img src={require("../images/hen1.jpg")} className="Logo-image" alt="hand drawing of hen, rustic, as logo" />
    <h2 className="Logo-title">Jenni's Hens</h2>
  </section>
);

export default Logo;