import CategoriesPreview from '../CategoriesPreview/categories-preview.component';
import { Routes, Route } from 'react-router-dom';
import './shop.style.scss';
import Category from '../Category/category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
