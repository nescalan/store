import { useEffect, useState } from "react";

const useFetchProducts = (API) => {
  const [products, setProduct] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((products) => setProduct(products));
  }, []);

  return { products };
};
export { useFetchProducts };

const URL = "https://jsonplaceholder.typicode.com/posts";
