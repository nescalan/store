import React from "react";
import { useFetchProducts } from "../../utilities/hooks/useFetchProducts";
import { ClothesItem } from "../../components";

const API = "https://api.escuelajs.co/api/v1/products?limit=8&offset=1";

const ClothesList = () => {
  const { products } = useFetchProducts(API);
  return (
    <>
      <section>
        <div className="container product-list">
          <span>Categories: Clothes</span>
        </div>
        <div className="container">
          <div className="product-list-flex">
            <ClothesItem products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClothesList;
