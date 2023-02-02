import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  UserSignOut,
  createUserdocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigaiton/navigation.component.jsx";
import AuthWithUser from "./routes/authWithUser/authWithUser.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import CheckOut from "./routes/checkout/checkout.component.jsx";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    UserSignOut();
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        dispatch(
          setCurrentUser({ displayName: user.displayName, email: user.email })
        );
        createUserdocumentFromAuth(user);
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<AuthWithUser />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
