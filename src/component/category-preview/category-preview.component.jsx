import { Link } from "react-router-dom";
import ProductCard from "../product-card/productCard.component";
import { ShopGridContainer, ShopContainer } from "./category-preview.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <ShopContainer key={title}>
      <h2 className="shop-title">
        <Link to={title}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <ShopGridContainer>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ShopGridContainer>
    </ShopContainer>
  );
};

export default CategoryPreview;
