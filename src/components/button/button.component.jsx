import './button.style.scss';

import React from 'react';

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonTypes, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonTypes]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
