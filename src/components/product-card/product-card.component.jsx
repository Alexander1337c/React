import './product-card.style.scss';
import React from 'react';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/selectCart';

const ProductCard = ({ product }) => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const addToCartProduct = () => {
    dispatch(addItemToCart(items, product));
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='product-name'> {name}</span>
        <span className='product-price'>{price}</span>
      </div>
      <Button
        children={'Add to cart'}
        buttonTypes={BUTTON_TYPES_CLASSES.inverted}
        onClick={addToCartProduct}
      />
    </div>
  );
};

export default ProductCard;
