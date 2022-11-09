import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Homelogo } from "../../asset/doughnut-sweet-svgrepo-com.svg";
import { UserContext } from "../../context/context.component";
import { CartContext } from "../../context/cartContext.component";
import { UserSignOut } from "../../utils/firebase/firebase.utils";
import CartLogo from "../../component/cartlogo/cartlogo.compenent";
import CartDropDown from "../../component/cart-dropdowm/cartDropDown.component";
import "./navigation.style.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-link" to="/">
          <Homelogo className="logo-container" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Contact
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={UserSignOut} to="/auth">
              SignOut
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SignIn
            </Link>
          )}
          <CartLogo />
        </div>
        {isOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
