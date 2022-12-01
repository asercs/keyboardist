import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Notfound } from './pages/Notfound';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import {ProductPage} from "./pages/ProductPage";
import {Shop} from "./pages/Shop";
import {Cart} from "./pages/Cart";
import Typing from "./pages/Typing";
import Layout from "./components/Layout";
import {Wiki} from "./pages/Wiki";
import {useEffect, useState} from "react";
import {ProductPageDynamic} from "./pages/ProductPageDynamic";

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8000/user', {
        headers: { 'Content-type': 'application/json' },
        method: 'GET',
        credentials: 'include',
      });

      const content = await response.json();
      const myArray = Object.values(response);


      if (content.email !== undefined) {
        setUser(content.email);
      } else {
        setUser('');
      }
    })();
  });

  return (
      <div className="w-full overflow-hidden bg-primary dark">
        <div className="flex justify-center items-center">
          <div className="w-full">
            {/*<Navbar/>*/}
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Homepage/>} />
                <Route path="shop" element={<Shop/>} />
                <Route path="product" element={<ProductPage/>} />
                <Route path="product/:order" element={<ProductPageDynamic/>} />
                <Route path="cart" element={<Cart/>}  key={document.location.href}/>
                <Route path="typing" element={<Typing/>} />
                <Route path="wiki" element={<Wiki/>} />
              </Route>

              <Route path="*" element={<Notfound/>} />
              <Route path="signup" element={<Signup/>} />
              <Route path="signin" element={<Signin/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
