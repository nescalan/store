import React from "react";
import "./ProductItem.scss";

const ProductItem = ({ products }) => {
  return (
    <>
      {!products ? (
        <div className="product-item">
          <i className="lds-dual-ring"></i>
        </div>
      ) : (
        products.map((product) => (
          <div className="product-item" key={`produt-id-${product.id}`}>
            <img src={product.images[0]} alt="product photography" />
            <h1>{product.title}</h1>
            <span>Category: {product.category.name}</span>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </>
  );
};

export default ProductItem;
