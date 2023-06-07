import React, { useContext, useState } from 'react';
import './shopping-item.style.scss';
import { CartContext } from '../../context/itemContext';

const ShoppingItem = ({ itemCart }) => {
  const { addItemToCart, decItemCart, removeItem } = useContext(CartContext);
  const { imageUrl, name, quantity, curTotalPrice } = itemCart;

  return (
    <div className='cart-container'>
      <img src={imageUrl} alt='' />
      <span>{name}</span>
      <div className='quantity'>
        <button
          onClick={() => {
            decItemCart(itemCart);
          }}
        >
          &#9668;
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            addItemToCart(itemCart);
          }}
        >
          &#9658;
        </button>
      </div>
      <span>{curTotalPrice}</span>
      <button
        onClick={() => {
          removeItem(itemCart);
        }}
      >
        &#10005;
      </button>
    </div>
  );
};

export default ShoppingItem;
