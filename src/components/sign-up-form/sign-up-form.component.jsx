import React, { useState } from 'react';
import {
  createUserWithPasswordAndEmail,
  createUserDocumentFromAuth,
} from '../../Utils/Firebase/firebase.utils';
import InputForm from '../input-form/input-form.component';
import './sign-up-form.style.scss';
import Button from '../button/button.component';

const defaultField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultField);
  const { displayName, email, password, confirmPassword } = formField;

  const clearFormField = () => {
    setFormField(defaultField);
  };
  const createUser = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const { user } = await createUserWithPasswordAndEmail(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      clearFormField();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('User already exist');
      } else {
        console.log(`error ${error}`);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don`t have account?</h2>
      <span>Sign up </span>
      <form onSubmit={createUser}>
        <InputForm
          label='Display name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <InputForm
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <InputForm
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <InputForm
          label='Confirm password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <InputForm
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button children='SIGN UP' type='submit' />
      </form>
    </div>
  );
};

export default SignUpForm;
