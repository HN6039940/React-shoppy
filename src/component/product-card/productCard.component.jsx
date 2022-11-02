import Button from "../button/button.component.jsx";
import "./productCard.style.scss";
const ProductCard = ({ product }) => {
  const { id, imageUrl, name, price } = product;
  return (
    <div className="products-card-container" key={id}>
      <div className="products-img-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="footer">
        <h1 className="name">{name}</h1>
        <span className="price">{price}</span>
      </div>
      <Button children={`Add Cart`} />
    </div>
  );
};

export default ProductCard;
