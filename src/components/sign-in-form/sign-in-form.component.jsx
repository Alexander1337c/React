import { signInWithPasswordAndEmail } from '../../Utils/Firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import InputForm from '../input-form/input-form.component';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import './sign-in-form.style.scss';
import { googleSIgnIn, emailSignIn } from '../../store/user/user-action';

const defaultField = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formField, setFormField] = useState(defaultField);
  const { email, password } = formField;

  const clearFormField = () => {
    setFormField(defaultField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignIn(email, password));
      clearFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password');
          break;
        case 'auth/user-not-found':
          alert('User do not exist');
          break;
        default:
          console.log(error);
      }
    }
  };

  const logGoogleUser = async () => {
    try {
      dispatch(googleSIgnIn());
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        return;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className='sign-in-component'>
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label={'Email'}
          type='email'
          required
          name='email'
          value={email}
          onChange={handleChange}
        />
        <InputForm
          label={'Password'}
          type='password'
          required
          name='password'
          value={password}
          onChange={handleChange}
        />
        <div className='button-wrap-container'>
          <Button children={'SIGN IN'} type='submit' />
          <Button
            children={'SIGN IN with google'}
            buttonTypes={BUTTON_TYPES_CLASSES.google}
            type='button'
            onClick={logGoogleUser}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
