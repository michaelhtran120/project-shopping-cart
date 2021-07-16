import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "../CSS/nav.css";
import logo from "../Images/logo.png";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";

const Nav = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Router>
      <nav>
        <div className='nav-logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='nav-links'>
          <Link to='/' style={linkStyle}>
            HOME
          </Link>
          <Link to='/products' style={linkStyle}>
            PRODUCTS
          </Link>
          <Link to='/about' style={linkStyle}>
            ABOUT
          </Link>
        </div>
        <div className='cart-link'>
          <Link>
            <span className='material-icons-outlined'>shopping_bag</span>
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
