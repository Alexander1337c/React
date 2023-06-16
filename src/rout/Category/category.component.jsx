import { useParams } from 'react-router-dom';
import './category.style.scss';
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategory } from '../../store/categories/selectCategory';

const Category = () => {
  const { category } = useParams();
  const currentCategories = useSelector(selectCategory);
  const [products, setProducts] = useState(currentCategories[category]);

  useEffect(() => {
    setProducts(currentCategories[category]);
  }, [category, currentCategories]);
  return (
    <Fragment>
      <h2>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
