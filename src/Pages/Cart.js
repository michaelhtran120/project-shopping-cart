import React from "react";
import { Link } from "react-router-dom";
import "../CSS/cart.css";

const Cart = ({
  cartItems,
  onChange,
  onDelete,
  increment,
  decrement,
  cartTotalPrice,
  checkout,
}) => {
  if (cartItems.length === 0) {
    return (
      <div className='empty-cart-container'>
        <h2>No items in your cart</h2>
        <Link to='/products'>
          <button>GO TO PRODUCTS</button>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <div className='cart-container'>
          {cartItems.map((product, i) => (
            <div className='cart-item-container' key={i}>
              <img src={product.imgsrc} alt={`${product.name} product`} />
              <h3>{product.name}</h3>
              <h4>${product.price}</h4>
              <div className='qty-container'>
                <button className='qty-btn' onClick={() => decrement(i)}>
                  ➖
                </button>
                <input
                  type='number'
                  id={product.id}
                  value={product.qty}
                  onChange={(e) => onChange(e, i)}
                  min='1'
                  max='100'
                />
                <button className='qty-btn' onClick={() => increment(i)}>
                  ➕
                </button>
              </div>
              <h4>${product.qty * product.price}</h4>
              <button className='delete-btn' onClick={() => onDelete(product)}>
                Remove From Cart
              </button>
            </div>
          ))}
        </div>
        <br />
        <br />
        <hr />
        <div className='cart-total-container'>
          <h3>Total: </h3>
          <h4>${cartTotalPrice}</h4>
        </div>
        <button className='checkout-btn' onClick={checkout}>
          Checkout
        </button>
      </>
    );
  }
};

export default Cart;
