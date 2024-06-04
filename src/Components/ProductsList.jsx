import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./productList.css";

function ProductsList() {
  const productsUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(productsUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h2> Our Products </h2>
      <div className="cards-container">
        <div className="main-cards">
          {products.map((product) => {
            return (
              <Product product={product} showButton={true} key={product.id} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
