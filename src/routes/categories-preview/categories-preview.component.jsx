import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((name) => {
        const product = categoriesMap[name];
        return <CategoryPreview title={name} products={product} key={name} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
