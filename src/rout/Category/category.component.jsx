import { useParams } from 'react-router-dom';
import './category.style.scss';
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategory,
} from '../../store/categories/selectCategory';
import Spinner from '../../components/spinner/spiner.component';

const Category = () => {
  const { category } = useParams();
  const currentCategories = useSelector(selectCategory);
  const [products, setProducts] = useState(currentCategories[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);
  useEffect(() => {
    setProducts(currentCategories[category]);
  }, [category, currentCategories]);
  return (
    <Fragment>
      <h2>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='category-container'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
