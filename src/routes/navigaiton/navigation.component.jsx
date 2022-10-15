import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Homelogo } from "../../asset/doughnut-sweet-svgrepo-com.svg";
import "./navigation.style.scss";
const Navigation = () => {
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
          <Link className="nav-link" to="/h1">
            Contact
          </Link>
          <Link className="nav-link" to="/sign-up">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
