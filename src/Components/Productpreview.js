import React from "react";
// import { Link, Switch, BrowserRouter as router } from "react-router-dom";

const ProductPrev = ({ name, imgsrc, description, price, alt, onAdd }) => {
  return (
    <div className='product'>
      <img src={imgsrc} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={onAdd}>Add To Cart</button>
    </div>
  );
};

export default ProductPrev;
