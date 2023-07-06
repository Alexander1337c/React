import {
  BaseButton,
  ButtonSpinner,
  GoogleSign,
  Inverted,
} from './button.style';

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

const Button = ({ children, isLoading, buttonTypes, ...otherProps }) => {
  const CustomButtom = getButton(buttonTypes);
  return (
    <CustomButtom disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButtom>
  );
};

export default Button;
