import { useState, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/Categories.context";

import ProductCard from "../../component/product-card/productCard.component";
import { CategoryTitle, CategoryGridContainer } from "./category.style.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [product, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryGridContainer>
        {product &&
          product.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryGridContainer>
    </Fragment>
  );
};

export default Category;
