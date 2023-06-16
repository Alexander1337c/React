
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './Utils/Firebase/firebase.utils';
import { Route, Routes } from 'react-router-dom';
import Home from './rout/Home/home.components';
import Navigation from './rout/Navigation/navigation.component';
import Authentication from './rout/Authentication/authentication.component';
import Shop from './rout/Shop/shop.component'
import ShoppingCart from './rout/Shopping-Cart/shopping-cart.component';
import { setCurrentUser } from './store/user/user-action';


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));

    });

    return unSubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shopping-cart' element={<ShoppingCart />} />
      </Route >
    </Routes>
  );
}

export default App;
