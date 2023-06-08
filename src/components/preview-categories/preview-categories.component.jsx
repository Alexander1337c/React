import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Preview,
  Header,
} from './preview-categorise.style';

const PreviewCategories = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Header>
        <Link to={title}>{title}</Link>
      </Header>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default PreviewCategories;
