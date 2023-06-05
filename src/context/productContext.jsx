import { useState, createContext, useEffect } from 'react';
import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({
  currentProduct: [],
  setCurrentProduct: () => null,
});

export const ProductContextProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState(PRODUCTS);
  const value = { currentProduct, setCurrentProduct };
  useEffect(() => {}, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
