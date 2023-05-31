import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.style.scss';
import { ReactComponent as CrwnLogo } from '../../assets/87 - crown.svg';

const Navigation = () => {
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
          <Link className='nav-link' to='/auth'>
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
