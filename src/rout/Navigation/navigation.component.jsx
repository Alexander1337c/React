import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.style.scss';
import { ReactComponent as CrwnLogo } from '../../assets/87 - crown.svg';
import { UserContext } from '../../context/userContext';
import { signOutUser } from '../../Utils/Firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
            <Link className='nav-link' onClick={signOutUser}>
              SIGN-OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign-In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
