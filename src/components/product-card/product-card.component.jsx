import './product-card.style.scss';
import React, { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../context/itemContext';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCartProduct = () => {
    addItemToCart(product);
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
        buttonTypes={'inverted'}
        onClick={addToCartProduct}
      />
    </div>
  );
};

export default ProductCard;
