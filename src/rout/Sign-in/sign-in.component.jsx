import React from 'react';
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../Utils/Firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>SignIn with google popup</button>
    </div>
  );
};

export default SignIn;
