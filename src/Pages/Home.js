import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import hero from "../Images/home-hero.png";

const Home = () => {
  const shopStyle = {
    position: "absolute",
    right: "23%",
    top: "60%",
    textDecoration: "none",
    padding: "16px 20px",
    borderRadius: "30px",
    backgroundColor: "white",
    color: "#af1685",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "arial, sans-serif",
    letterSpacing: "1px",
  };
  return (
    <div className='hero-image'>
      <img src={hero} alt='olly products' />
      <Link to='/products' id='hero-btn' style={shopStyle}>
        Shop Gummy Vitamins
      </Link>
    </div>
  );
};

export default Home;
