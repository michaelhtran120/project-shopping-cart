import React from "react";
import "../CSS/cart.css";

const Cart = ({ cartItems, onChange, onDelete, increment, decrement }) => {
  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Cart is empty</h2>
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
              <div>
                <button onClick={() => decrement(i)}> - </button>
                <input
                  type='number'
                  id={product.id}
                  value={product.qty}
                  onChange={(e) => onChange(e, i)}
                  min='1'
                  max='100'
                />
                <button onClick={() => increment(i)}> + </button>
              </div>
              <h4>${product.qty * product.price}</h4>
              <button onClick={() => onDelete(product)}>Remove</button>
            </div>
          ))}
        </div>
        <br />
        <br />
        <hr />
      </>
    );
  }
};

export default Cart;
