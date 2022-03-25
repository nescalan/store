import React, { useEffect, useState } from "react";
import { ProductItem } from "../../components";
import "./ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products?limit=8&offset=0";

const ProductList = () => {
  const [products, setProduct] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((products) => setProduct(products));
  }, []);

  console.log(products);

  return (
    <>
      <section>
        <div className="container product-list">
          <span className="product-list-title">
            Get inspired by our Products
          </span>
        </div>
        <div className="container">
          <div className="product-list-flex">
            <ProductItem products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
