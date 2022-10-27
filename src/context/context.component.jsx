import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  UserSignOut,
  createUserdocumentFromAuth,
} from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    UserSignOut();
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        setCurrentUser({ displayName: user.displayName, email: user.email });
        createUserdocumentFromAuth(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
