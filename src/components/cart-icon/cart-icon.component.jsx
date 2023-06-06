import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/115 - shopping-bag.svg';
import './cart-icon.style.scss';
import { CartContext } from '../../context/itemContext';

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen, countItem } = useContext(CartContext);
  const toggleIsCartOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{countItem}</span>
    </div>
  );
};

export default CartIcon;
