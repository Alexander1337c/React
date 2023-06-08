import { useParams } from 'react-router-dom';
import './category.style.scss';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../context/categoriesContext';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { currentCategories } = useContext(CategoriesContext);
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
