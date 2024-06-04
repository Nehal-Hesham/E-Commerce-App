import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const productsLink = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${productsLink}/${params.productId}`).then((res) =>
      res.json().then((product) => setProduct(product))
    );
  }, []);

  return <Product product={product} showButton={false} />;
}

export default ProductDetails;
