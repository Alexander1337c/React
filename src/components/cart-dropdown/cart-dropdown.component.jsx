import './cart-dropdown.style.scss';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cartItem/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/itemContext';

const CartDropDown = () => {
  const { cartItems, cartIsOpen, setCartIsOpen } = useContext(CartContext);
  const openCart = () => setCartIsOpen(!cartIsOpen);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to='/shopping-cart'>
        <Button children={'GO TO CHECKOUT'} onClick={openCart} />
      </Link>
    </div>
  );
};

export default CartDropDown;
