import { useState, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/Categories.context";

import ProductCard from "../../component/product-card/productCard.component";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [product, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-grid-container">
        {product &&
          product.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
