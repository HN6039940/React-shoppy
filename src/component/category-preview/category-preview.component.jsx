import { Link } from "react-router-dom";
import ProductCard from "../product-card/productCard.component";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div key={title} className="shop-container">
      <h2 className="shop-title">
        <Link to={title}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="shop-grid-container">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
