import { CART_ACTION_TYPE } from './cart.type';
import { createAction } from '../../Utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
  console.log(`${cartItems}, ${productToAdd}`);
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
const itemRemoveAll = (cartItems) => {
  cartItems = [];
  return cartItems;
};

export const setCartIsOpen = (bool) =>
  createAction(CART_ACTION_TYPE.CART_IS_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItem = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.CART_UPDATE, newCartItem);
};
export const decItemCart = (cartItems, productToDec) => {
  const newCartItem = decrementItem(cartItems, productToDec);
  return createAction(CART_ACTION_TYPE.CART_UPDATE, newCartItem);
};
export const removeItem = (cartItems, productRemove) => {
  const newCartItem = itemRemove(cartItems, productRemove);
  return createAction(CART_ACTION_TYPE.CART_UPDATE, newCartItem);
};

export const removeItems = (cartItems) => {
  const newCartItem = itemRemoveAll(cartItems);
  return createAction(CART_ACTION_TYPE.CART_UPDATE, newCartItem);
};
