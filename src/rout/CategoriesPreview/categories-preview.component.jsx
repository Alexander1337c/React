import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCategories from '../../components/preview-categories/preview-categories.component';
import {
  selectCategoriesIsLoading,
  selectCategory,
} from '../../store/categories/selectCategory';
import Spinner from '../../components/spinner/spiner.component';

const CategoriesPreview = () => {
  const currentCategories = useSelector(selectCategory);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <div className='preview-container'>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(currentCategories).map((title) => {
          const products = currentCategories[title];
          return (
            <PreviewCategories products={products} key={title} title={title} />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
