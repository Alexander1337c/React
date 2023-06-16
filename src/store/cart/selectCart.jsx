import { createSelector } from 'reselect';

const selectCartReduce = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReduce],
  (cart) => cart.cartItems
);

export const selectCartIsOpen = createSelector(
  [selectCartReduce],
  (cart) => cart.cartIsOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
