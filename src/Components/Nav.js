import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "../CSS/nav.css";
import logo from "../Images/logo.png";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Cart from "../Pages/Cart";

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
          <Link to='/cart' style={linkStyle}>
            <div className='cart-container'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <g>
                  <rect fill='none' height='24' width='24' />
                  <path d='M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z' />
                </g>
              </svg>
              <span>0</span>
            </div>
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
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;