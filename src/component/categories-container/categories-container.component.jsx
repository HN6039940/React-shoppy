import Category from "../category-item/category-item.component";
import "./categories-container.style.scss";
const CategoriesContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Category category={category} />;
      })}
    </div>
  );
};

export default CategoriesContainer;
