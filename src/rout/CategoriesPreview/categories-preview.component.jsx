import React from 'react';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/categoriesContext';
import PreviewCategories from '../../components/preview-categories/preview-categories.component';

const CategoriesPreview = () => {
  const { currentCategories } = useContext(CategoriesContext);
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
