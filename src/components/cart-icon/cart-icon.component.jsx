import { CartIconContainer, Icon, CountItem } from './cart-icon.style';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/selectCart';
import { setCartIsOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const dispatch = useDispatch();
  const countItem = useSelector(selectCartCount);
  const cartIsOpen = useSelector(selectCartIsOpen);

  const toggleIsCartOpen = () => dispatch(setCartIsOpen(!cartIsOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <Icon />
      <CountItem>{countItem}</CountItem>
    </CartIconContainer>
  );
};

export default CartIcon;
