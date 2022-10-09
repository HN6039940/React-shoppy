import "./category-item.style.scss";
const Category = ({ category }) => {
  const { id, title, img } = category;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${img})`,
        }}
      />
      <div className="category-body-container">
        <h2 className="category-title">{title}</h2>
        <p className="category-description">categorie-description</p>
      </div>
    </div>
  );
};

export default Category;
