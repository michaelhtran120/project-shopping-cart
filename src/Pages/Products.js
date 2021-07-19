import React from "react";
import "../CSS/product.css";
import hero from "../Images/product-hero.png";

import ProductPrev from "../Components/Productpreview";

const Products = ({ products, onClick }) => {
  return (
    <div className='products-container'>
      <div className='product-hero'>
        <img src={hero} alt='product hero' />
      </div>
      <div className='products-preview-grid'>
        {products.map((item) => {
          return (
            <ProductPrev
              key={item.id}
              name={item.name}
              imgsrc={item.imgsrc}
              description={item.description}
              price={item.price}
              alt={item.alt}
              onAdd={() => onClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
