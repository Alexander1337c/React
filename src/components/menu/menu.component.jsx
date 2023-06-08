import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import './menu.style.scss';

const Menu = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Menu;
