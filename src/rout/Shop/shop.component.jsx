import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../CategoriesPreview/categories-preview.component';
import { Routes, Route } from 'react-router-dom';
import { fetchCategoriesStart } from '../../store/categories/categories.action';
import './shop.style.scss';
import Category from '../Category/category.component';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
