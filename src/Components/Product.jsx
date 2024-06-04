import { Link } from "react-router-dom";
import "./product.css";

function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="card">
        <img className="card-img" src={product.image} alt={product.title} />
        <div className="card-content">
          <h1>{product.title?.slice(0, 60)}</h1>
          <p>{product.description?.slice(0, 100) + " "}</p>
          <p> Price {product.price} $</p>
          <button className="product-btn">
            {showButton && <a href={`/product/${product.id}`}>See More</a>}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
