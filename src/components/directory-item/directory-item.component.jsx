import { Link } from 'react-router-dom';
import './directory-item.style.scss';

import React from 'react';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className={`directory-container`}>
      <div
        className='background-img'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='directory-body-container'>
        <h2>
          <Link to={`/shop/${title}`}>{title}</Link>
        </h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
