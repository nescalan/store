import React from "react";
import "../ProductItem/ProductItem.scss";

const ClothesItem = ({ products }) => {
  const searchValue = "Clothes";

  const searchedClothes = products.filter((product) => {
    const category = product.category.name.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return category.includes(searchText);
  });

  console.log(searchedClothes);

  return <></>;
};

export default ClothesItem;
