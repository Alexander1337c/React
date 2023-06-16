import React from 'react';
import { useDispatch } from 'react-redux';
import './shopping-item.style.scss';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/selectCart';
import {
  addItemToCart,
  decItemCart,
  removeItem,
} from '../../store/cart/cart.action';

const ShoppingItem = ({ itemCart }) => {
  const dispatch = useDispatch();
  // const { addItemToCart, decItemCart, removeItem } = null;
  const items = useSelector(selectCartItems);
  const { imageUrl, name, quantity, curTotalPrice } = itemCart;

  return (
    <div className='cart-container'>
      <img src={imageUrl} alt='' />
      <span>{name}</span>
      <div className='quantity'>
        <button
          onClick={() => {
            dispatch(decItemCart(items, itemCart));
          }}
        >
          &#9668;
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch(addItemToCart(items, itemCart));
          }}
        >
          &#9658;
        </button>
      </div>
      <span>{curTotalPrice}</span>
      <button
        onClick={() => {
          dispatch(removeItem(items, itemCart));
        }}
      >
        &#10005;
      </button>
    </div>
  );
};

export default ShoppingItem;
