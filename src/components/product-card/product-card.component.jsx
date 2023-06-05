import './product-card.style.scss';
import React from 'react';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='product-name'> {name}</span>
        <span className='product-price'>{price}</span>
      </div>
      <Button children={'Add to cart'} buttonTypes={'inverted'} />
    </div>
  );
};

export default ProductCard;
