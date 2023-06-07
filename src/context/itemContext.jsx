import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const isContainsProduct = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (isContainsProduct) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            curTotalPrice: item.curTotalPrice + item.price,
          }
        : item
    );
  }
  return [
    ...cartItems,
    { ...productToAdd, quantity: 1, curTotalPrice: productToAdd.price },
  ];
};

const decrementItem = (cartItems, productToDec) => {
  const isContainsProduct = cartItems.find(
    (item) => item.id === productToDec.id
  );
  if (isContainsProduct.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToDec.id);
  }
  return cartItems.map((item) =>
    item.id === productToDec.id
      ? {
          ...item,
          quantity: item.quantity - 1,
          curTotalPrice: item.curTotalPrice - item.price,
        }
      : item
  );
};

const itemRemove = (cartItems, productRemove) => {
  return cartItems.filter((item) => item.id !== productRemove.id);
};

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  countItem: 0,
  totalPrice: 0,
  decItemCart: () => {},
  productRemove: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [countItem, setCountItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCountItem(cartCount);
    const shopTotalPrice = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalPrice(shopTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const decItemCart = (productToDec) => {
    setCartItems(decrementItem(cartItems, productToDec));
  };
  const removeItem = (productRemove) => {
    setCartItems(itemRemove(cartItems, productRemove));
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    addItemToCart,
    cartItems,
    countItem,
    totalPrice,
    decItemCart,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
