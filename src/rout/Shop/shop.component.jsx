import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../CategoriesPreview/categories-preview.component';
import { Routes, Route } from 'react-router-dom';
import { getCategoryAndDocument } from '../../Utils/Firebase/firebase.utils';
import { getCategoryMap } from '../../store/categories/categories.action';
import './shop.style.scss';
import Category from '../Category/category.component';

const Shop = () => {
  const dispath = useDispatch();
  useEffect(() => {
    const getCategory = async () => {
      const categories = await getCategoryAndDocument('categories');
      dispath(getCategoryMap(categories));
    };
    getCategory();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
