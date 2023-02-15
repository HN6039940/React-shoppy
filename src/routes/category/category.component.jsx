import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectorCategoriesMap,
  selectorCategoriesIsloading,
} from "../../store/category/category.selector";
import ProductCard from "../../component/product-card/productCard.component";
import Spinner from "../../component/spinner/spinner.component";
import { CategoryTitle, CategoryGridContainer } from "./category.style.jsx";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectorCategoriesMap);
  const isloading = useSelector(selectorCategoriesIsloading);
  const [product, setProduct] = useState(categories[category]);
  useEffect(() => {
    setProduct(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

      {isloading ? (
        <Spinner />
      ) : (
        <CategoryGridContainer>
          {product &&
            product.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </CategoryGridContainer>
      )}
    </Fragment>
  );
};

export default Category;
