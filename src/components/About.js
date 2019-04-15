import React, { useState } from 'react';
import './About.css';
import Chickens from '../data/Chickens';

const About = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const openPopup = (breed) => {
    setSelectedBreed(breed);
    if(popupOpen) {
      setPopupOpen(false);
    } else if (!popupOpen) {
      setPopupOpen(true);
    }
  };
  const closePopup = () => {
    setPopupOpen(false);
    setSelectedBreed(null);
  }

  return (
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
          {Chickens.map((chickenBreed) => 
            <div className="Chicken-Box" key={chickenBreed.breed + chickenBreed.index.toString()} onClick={()=>{openPopup(chickenBreed)}}>
              <h3>{chickenBreed.breed}</h3>
              <img src={chickenBreed.img} alt={chickenBreed.breed} />
              <p>{chickenBreed.details}</p>
            </div>
          )}
        </div>
      </div>
      {popupOpen && 
        <div className="Overlay-Outer">
          <div className="Overlay-Inner">
            <h1>{selectedBreed.breed}</h1>
            <p onClick={()=>{closePopup()}}>close</p>
            <img src={selectedBreed.img} alt={selectedBreed.breed}></img>
          </div>
        </div>
      }
    </section>
  );
};

export default About;