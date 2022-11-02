import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../component/product-card/productCard.component";

import "./shop.style.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-grid-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Shop;
