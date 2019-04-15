import React from 'react';
import './About.css';
import Chickens from '../data/Chickens';

const About = () => (
  <section className="About">
  {console.log(Chickens)}
    <div className="About-container">
      <div className="About-inner">
        <h1>Meet The Hens</h1>
        <div className="About-border"></div>
        <p>The chickens live a happy life, fully free-range. they are an assortment of rare breeds. It is important to keep non-traditional species alive. The hens are part of the ongoing desire to keep the genetic diversity in a sustainable manner.</p>
      </div>
    </div>

    <div className="Chicken-Coup">
      <div className="Chicken-Coup-Inner">

        {Chickens.map((chickenBreed) => 
          <div className="Chicken-Box">
            <h3>{chickenBreed.breed}</h3>
            <img src={chickenBreed.img} alt={chickenBreed.name} />
            <p>{chickenBreed.details}</p>
          </div>
        )}

        
      </div>
    </div>

  </section>
);

export default About;