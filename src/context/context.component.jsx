import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  UserSignOut,
  createUserdocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error("");
  }
};

const UserProvider = ({ children }) => {
  const INITIAL_STATE = {
    currentUser: null,
  };
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user });
  };
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
