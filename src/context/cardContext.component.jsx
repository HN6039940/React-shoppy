import { useState, createContext } from "react";

export const CardContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

const CardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardProvider;
