import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.style.scss';
import { ReactComponent as CrwnLogo } from '../../assets/87 - crown.svg';
import { signOutStart } from '../../store/user/user-action';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectorCurrentUser } from '../../store/user/user.selector';
import { selectCartIsOpen } from '../../store/cart/selectCart';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectorCurrentUser);
  const cartIsOpen = useSelector(selectCartIsOpen);
  const signOut = () => dispatch(signOutStart());

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-link-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <Link className='nav-link' onClick={signOut}>
              SIGN-OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign-In
            </Link>
          )}
          <CartIcon />
        </div>
        {cartIsOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
