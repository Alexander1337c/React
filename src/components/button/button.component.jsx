import { BaseButton, GoogleSign, Inverted } from './button.style';

import React from 'react';

export const BUTTON_TYPES_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonTypes = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSign,
    [BUTTON_TYPES_CLASSES.inverted]: Inverted,
  }[buttonTypes]);

const Button = ({ children, buttonTypes, ...otherProps }) => {
  const CustomButtom = getButton(buttonTypes);
  return <CustomButtom {...otherProps}>{children}</CustomButtom>;
};

export default Button;
