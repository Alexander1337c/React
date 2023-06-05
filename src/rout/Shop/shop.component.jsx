import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../context/productContext';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.style.scss';

const Shop = () => {
  const { currentProduct } = useContext(ProductContext);
  return (
    <div className='shop-container'>
      {currentProduct.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
