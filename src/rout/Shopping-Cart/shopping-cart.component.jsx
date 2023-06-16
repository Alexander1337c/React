import React from 'react';
import './shopping-cart.style.scss';
import ShoppingItem from '../../components/shopping-item/shopping-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartPrice } from '../../store/cart/selectCart';

const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartPrice);

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
