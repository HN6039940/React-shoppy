import { useState, createContext } from "react";
import PRODUCTS from "../shopData/shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
