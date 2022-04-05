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
            {/* <img src={product.images[0]} alt="product photography" /> */}
            <img src={product.category.image} alt={product.name} />
            <h1>{product.title}</h1>
            <span className="product-item-category">
              Category: {product.category.name}
            </span>
            <p className="product-item-description">{product.description}</p>
            <div>
              <p className="product-item-price">Price: ${product.price}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ProductItem;
