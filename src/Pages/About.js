import React from "react";
import "../CSS/about.css";
import hero from "../Images/about-hero.png";

const About = () => {
  return (
    <div className='about'>
      <div className='about-hero-image'>
        <img src={hero} alt='man with hula hoop' />
      </div>
      <div className='passion-container'>
        <h2>PASSION</h2>
        <h3>Our passion</h3>
        <p>
          Good health is at the center of everything we do. That's why we've
          made it our personal missio to make nutrition easy to understand, so
          you can pursue good health without compromise. We do it by crafting
          products that just as effective as they are delightful and delicious.
          Because we know when something feels good, you're a lot more likely to
          do it.
        </p>
      </div>
      <div className='culture-container'>
        <h2>CULTURE</h2>
        <h3>Camp life the best life</h3>
        <p>
          That's the theme of our office -- in the way it looks and how we work.
          We laugh often, respect always, embrace quirks and forge new trails.
          It's our mission to maintai a healthy atmosphere full of happy
          campers.
        </p>
      </div>
    </div>
  );
};

export default About;
