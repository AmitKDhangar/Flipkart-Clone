import { createContext, useState } from "react";
export const ProductContext = createContext();
export const ProductContextProvider = ({ children }) => {
  const [productinfo, setproductinfo] = useState("");
  return (
    <ProductContext.Provider value={{ productinfo, setproductinfo }}>
      {children}
    </ProductContext.Provider>
  );
};
