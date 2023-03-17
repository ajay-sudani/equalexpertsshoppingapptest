import React from "react";
import { IProduct } from "../products/products.data";
import "./product.css";

const Product: React.FC<IProduct> = (props) => {
  const { name, price, units } = props;
  return (
    <div className="product">
      {units > 0 && <button className="add-to-cart">Add to Cart</button>}
      <div className="bgImage"></div>
      <div className="details">
        <p className="name">{name}</p>
        <div>
          <strong className="price">{price} $</strong>
          {units > 0 ? (
            <p className="units">Units: {units}</p>
          ) : (
            <p className="units">Out of Stock</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
