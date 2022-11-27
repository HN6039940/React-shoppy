import { useContext } from "react";
import { CartContext } from "../../context/cartContext.component.jsx";
import Button from "../button/button.component.jsx";
import {
  Footer,
  ProductImgContainer,
  ProductsCardContainer,
} from "./productCard.style.jsx";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { id, imageUrl, name, price } = product;

  const clickHandler = () => {
    addItemToCart(product);
  };
  return (
    <ProductsCardContainer key={id}>
      <ProductImgContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ProductImgContainer>
      <Footer>
        <h1 className="name">{name}</h1>
        <span className="price">{price}</span>
      </Footer>
      <Button children={`Add Cart`} onClick={clickHandler} />
    </ProductsCardContainer>
  );
};

export default ProductCard;
