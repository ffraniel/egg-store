import React from 'react';
import './About.css';

const About = () => (
  <section className="About">
    <div className="About-container">
      <div className="About-inner">
        <h1>Meet The Hens</h1>
        <div className="About-border"></div>
        <p>The chickens live a happy life, fully free-range. they are an assortment of rare breeds. It is important to keep non-traditional species alive. The hens are part of the ongoing desire to keep the genetic diversity in a sustainable manner.</p>
      </div>
    </div>

    <div className="Chicken-Coup">
      <div className="Chicken-Coup-Inner">

        <div className="Chicken-Box">
          <h3>Aracana</h3>
          <img src="x" alt="chick" />
          <p>Informationa bout the breeed</p>
        </div>

        <div className="Chicken-Box">
          <h3>bobbos</h3>
          <img src="x" alt="chick" />
          <p>Informationa bout the breeed</p>
        </div>

        <div className="Chicken-Box">
          <h3>Flabsters</h3>
          <img src="x" alt="chick" />
          <p>Informationa bout the breeed</p>
        </div>

        <div className="Chicken-Box">
          <h3>Spandaus</h3>
          <img src="x" alt="chick" />
          <p>Informationa bout the breeed</p>
        </div>
        
      </div>
    </div>

  </section>
);

export default About;