import {
  CategoryItemTitle,
  CategoryDescription,
  CategoryBackGroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from "./category-item.style.jsx";
const Category = ({ category }) => {
  const { id, title, img } = category;
  return (
    <CategoryContainer key={id}>
      <CategoryBackGroundImage
        img={`${process.env.PUBLIC_URL}/${img}`}
      ></CategoryBackGroundImage>
      {/* <div
        className="background-img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${img})`,
        }}
      /> */}
      <CategoryBodyContainer>
        <CategoryItemTitle>{title}</CategoryItemTitle>
        <CategoryDescription>description</CategoryDescription>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default Category;
