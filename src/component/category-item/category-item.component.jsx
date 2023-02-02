import { useNavigate } from "react-router-dom";
import {
  CategoryItemTitle,
  CategoryDescription,
  CategoryBackGroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from "./category-item.style.jsx";
const Category = ({ category }) => {
  const { id, title, img, route } = category;
  const Navigation = useNavigate();
  const onClickNavHandler = () => {
    Navigation(route);
  };
  return (
    <CategoryContainer key={id} onClick={onClickNavHandler}>
      <CategoryBackGroundImage
        img={`${process.env.PUBLIC_URL}/${img}`}
      ></CategoryBackGroundImage>

      <CategoryBodyContainer>
        <CategoryItemTitle>{title}</CategoryItemTitle>
        <CategoryDescription>description</CategoryDescription>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default Category;
