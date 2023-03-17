import Product from "../product/product";
import "./products.css";
import { ProductsData } from "./products.data";

const Products = () => {
  return (
    <div className="products">
      <div className="cart-text">
        <span>Your Cart</span>
      </div>
      <div className="products-list">
        {ProductsData.map((product) => (
          <Product key={product.id} {...product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
