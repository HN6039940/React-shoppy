import { compose, applyMiddleware, legacy_createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { RootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const middleWare = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWare));
const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composeEnhancers
);

export const persistor = persistStore(store);
