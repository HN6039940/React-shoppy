import { useState, useEffect, createContext } from "react";
import { getCategoriesAndDocuents } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const categoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuents();
      setCategoriesMap(categoryMap);
    };
    categoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
