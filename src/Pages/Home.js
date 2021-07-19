import React from "react";
import { Link } from "react-router-dom";
import "../CSS/home.css";
import hero from "../Images/home-hero.png";

const Home = () => {
  const shopBtnStyle = {
    position: "absolute",
    right: "18%",
    top: "74%",
    textDecoration: "none",
    padding: "16px 20px",
    border: ".5px solid black",
    borderRadius: "30px",
    backgroundColor: "white",
    color: "#af1685",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "arial, sans-serif",
    letterSpacing: "1px",
  };
  return (
    <div id='hero-image-container'>
      <img src={hero} alt='olly products' />
      <Link to='/products' id='hero-btn' style={shopBtnStyle}>
        Shop Gummy Vitamins
      </Link>
    </div>
  );
};

export default Home;
