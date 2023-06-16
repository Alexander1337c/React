import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.style';
import { Link } from 'react-router-dom';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import CartItem from '../cartItem/cart-item.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartIsOpen, selectCartItems } from '../../store/cart/selectCart';
import { setCartIsOpen } from '../../store/cart/cart.action';

const CartDropDown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIsOpen = useSelector(selectCartIsOpen);

  const openCart = () => dispatch(setCartIsOpen(!cartIsOpen));

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is EMPTY</EmptyMessage>
        )}
      </CartItems>
      <Link to='/shopping-cart'>
        <Button
          children={'GO TO CHECKOUT'}
          onClick={openCart}
          buttonTypes={BUTTON_TYPES_CLASSES.base}
        />
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
