import React, { useEffect, useState } from "react";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductItem = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((state) => setState(state));
  }, []);
  console.table(state);
  return <div>Soy Product Item</div>;
};

export default ProductItem;
