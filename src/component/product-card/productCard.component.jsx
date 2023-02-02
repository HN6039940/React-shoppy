import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../store/categories/cart.action.js";
import { selectorCart } from "../../store/categories/cart.selector.js";
import Button from "../button/button.component.jsx";
import {
  Footer,
  ProductImgContainer,
  ProductsCardContainer,
} from "./productCard.style.jsx";
const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectorCart);
  const dispatch = useDispatch();
  const { id, imageUrl, name, price } = product;

  const clickHandler = () => {
    dispatch(addItemToCart(cartItems, product));
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
