import { useEffect, useState } from "react";

const useFetchProducts = (API) => {
  const [products, setProduct] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((products) => setProduct(products));
  }, [API]);

  return { products };
};
export { useFetchProducts };
