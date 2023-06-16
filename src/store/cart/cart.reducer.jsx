import { CART_ACTION_TYPE } from './cart.type';

export const CART_INITIAL_STATE = {
  countItem: 0,
  totalPrice: 0,
  cartIsOpen: false,
  cartItems: [],
};

export const cartReduce = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.CART_UPDATE:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPE.CART_IS_OPEN:
      return { ...state, cartIsOpen: payload };
    default:
      return state;
  }
};
