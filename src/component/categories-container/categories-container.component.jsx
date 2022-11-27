import Category from "../category-item/category-item.component";
import { Categories } from "./categories-container.style.jsx";
const CategoriesContainer = ({ categories }) => {
  return (
    <Categories key={categories.key}>
      {categories.map((category) => {
        return <Category category={category} key={category.id} />;
      })}
    </Categories>
  );
};

export default CategoriesContainer;
