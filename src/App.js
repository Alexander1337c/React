

import { Route, Routes } from 'react-router-dom';
import Home from './rout/Home/home.components';
import Navigation from './rout/Navigation/navigation.component';
import Authentication from './rout/Authentication/authentication.component';

const Shop = () => {
  return <div>I am shop page</div>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route >
    </Routes>
  );
}

export default App;
