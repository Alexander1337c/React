import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const isContainsProduct = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (isContainsProduct) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const addCountItem = (cartItems) => {
  const count = cartItems
    .map((item) => item.quantity)
    .reduce((acc, cur) => acc + cur, 1);
  return count;
};

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  countItem: 0,
});

export const CartContextProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [countItem, setCountItem] = useState(0);

  useEffect(() => {
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCountItem(cartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    addItemToCart,
    cartItems,
    countItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
