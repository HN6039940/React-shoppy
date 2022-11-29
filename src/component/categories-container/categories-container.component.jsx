import Category from "../category-item/category-item.component";
import { Categories } from "./categories-container.style.jsx";
const categories = [
  {
    id: 1,
    title: "Choco",
    img: "img/category-choco-img.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Fruit",
    img: "img/category-fruit-img.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Icecleam",
    img: "img/category-icecleam-img.jpg",
    route: "shop/mens",
  },
  {
    id: 4,
    title: "Snack",
    img: "img/category-snack-img.jpg",
    route: "shop/sneakers",
  },
  {
    id: 5,
    title: "Sarad",
    img: "img/category-sarad-img.jpg",
    route: "shop/hats",
  },
];
const CategoriesContainer = () => {
  return (
    <Categories>
      {categories.map((category) => {
        return <Category category={category} key={category.id} />;
      })}
    </Categories>
  );
};

export default CategoriesContainer;
