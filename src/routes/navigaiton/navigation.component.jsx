import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Homelogo } from "../../asset/doughnut-sweet-svgrepo-com.svg";
import { UserContext } from "../../context/context.component";
import { CartContext } from "../../context/cartContext.component";
import { UserSignOut } from "../../utils/firebase/firebase.utils";
import CartLogo from "../../component/cartlogo/cartlogo.compenent";
import CartDropDown from "../../component/cart-dropdowm/cartDropDown.component";
import "./navigation.style.jsx";
import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from "./navigation.style.jsx";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <NavLink to="/">
          <LogoContainer as={Homelogo} />
        </NavLink>
        <NavLinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Contact</NavLink>
          {currentUser ? (
            <NavLink onClick={UserSignOut} to="/auth">
              SignOut
            </NavLink>
          ) : (
            <NavLink to="/auth">SignIn</NavLink>
          )}
          <CartLogo />
        </NavLinksContainer>
        {isOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
