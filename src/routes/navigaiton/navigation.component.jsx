import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { ReactComponent as Homelogo } from "../../asset/doughnut-sweet-svgrepo-com.svg";
import CartLogo from "../../component/cartlogo/cartlogo.compenent";
import CartDropDown from "../../component/cart-dropdowm/cartDropDown.component";
import "./navigation.style.jsx";
import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from "./navigation.style.jsx";
import { selectorIsOpen } from "../../store/categories/cart.selector.js";
import { SignOutStart } from "../../store/user/user.action.js";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOpen = useSelector(selectorIsOpen);
  const dispatch = useDispatch();
  const SignOut = () => {
    dispatch(SignOutStart());
  };
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
            <NavLink onClick={SignOut} to="/auth">
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
