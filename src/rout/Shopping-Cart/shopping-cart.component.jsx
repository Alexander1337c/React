import React, { useContext } from 'react';
import { CartContext } from '../../context/itemContext';
import './shopping-cart.style.scss';
import ShoppingItem from '../../components/shopping-item/shopping-item.component';

const ShoppingCart = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className='shopping-cart-container'>
      <div className='shopping-cart-header'>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>

      {cartItems.map((item) => (
        <ShoppingItem key={item.id} itemCart={item} />
      ))}
      <div className='shopping-cart-footer'>
        <span>Total price:</span>
        <h2>{totalPrice}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
