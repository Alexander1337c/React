import './category-item.style.scss';

import React from 'react';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className={`category-container`}>
      <div
        className='background-img'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>buy now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
