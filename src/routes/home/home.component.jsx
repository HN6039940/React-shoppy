import CategoriesContainer from "../../component/categories-container/categories-container.component";
const Home = () => {
  const categories = [
    { id: 1, title: "Choco", img: "img/category-choco-img.jpg" },
    { id: 2, title: "Fruit", img: "img/category-fruit-img.jpg" },
    { id: 3, title: "Icecleam", img: "img/category-icecleam-img.jpg" },
    { id: 4, title: "Snack", img: "img/category-snack-img.jpg" },
    { id: 5, title: "Sarad", img: "img/category-sarad-img.jpg" },
  ];
  return (
    <div>
      <CategoriesContainer categories={categories} />
    </div>
  );
};

export default Home;
