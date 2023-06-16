import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCategories from '../../components/preview-categories/preview-categories.component';
import { selectCategory } from '../../store/categories/selectCategory';

const CategoriesPreview = () => {
  const currentCategories = useSelector(selectCategory);
  return (
    <div className='preview-container'>
      {Object.keys(currentCategories).map((title) => {
        const products = currentCategories[title];
        return (
          <PreviewCategories products={products} key={title} title={title} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
