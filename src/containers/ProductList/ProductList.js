import React from "react";
import { useFetchProducts } from "../../utilities/hooks/useFetchProducts";
import { ProductItem } from "../../components";
import "./ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products?limit=8&offset=1";

const ProductList = () => {
  const { products } = useFetchProducts(API);
  return (
    <>
      <section>
        <div className="container product-list">
          <span>Get inspired by our Products</span>
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
