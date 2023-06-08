import { useContext } from 'react';
import { CartIconContainer, Icon, CountItem } from './cart-icon.style';
import { CartContext } from '../../context/itemContext';

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen, countItem } = useContext(CartContext);
  const toggleIsCartOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <Icon />
      <CountItem>{countItem}</CountItem>
    </CartIconContainer>
  );
};

export default CartIcon;
