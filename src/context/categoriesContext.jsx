import { useState, createContext, useEffect } from 'react';
import { getCategoryAndDocument } from '../Utils/Firebase/firebase.utils';

export const CategoriesContext = createContext({
  currentCategories: {},
});

export const CategoriesContextProvider = ({ children }) => {
  const [currentCategories, setCurrentCategories] = useState({});
  const value = { currentCategories };
  useEffect(() => {
    const getCategory = async () => {
      const categories = await getCategoryAndDocument();
      setCurrentCategories(categories);
    };
    getCategory();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
