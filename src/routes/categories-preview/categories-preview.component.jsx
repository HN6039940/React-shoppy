import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectorCategoriesIsloading,
  selectorCategoriesMap,
} from "../../store/category/category.selector";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import Spinner from "../../component/spinner/spinner.component";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectorCategoriesMap);
  const isloading = useSelector(selectorCategoriesIsloading);
  return (
    <Fragment>
      {isloading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((name) => {
          const product = categoriesMap[name];
          return <CategoryPreview title={name} products={product} key={name} />;
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
