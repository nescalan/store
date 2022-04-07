import React, { useState } from "react";
import addToCart from "../../assets/icons/bt_add_to_cart.svg";
import "./ProductItem.scss";

const ProductItem = ({ products }) => {
  const [cart, setCart] = useState([]);
  const handleClick = () => {
    setCart([]);
  };

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
              <p className="product-item-price">Price: $ {product.price}</p>
              <figure onClick={() => handleClick()}>
                <img src={addToCart} alt="add to cart" />
              </figure>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ProductItem;
