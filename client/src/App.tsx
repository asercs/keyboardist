import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { Notfound } from './pages/Notfound';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import {ProductPage} from "./pages/ProductPage";
import {Shop} from "./pages/Shop";
import {Cart} from "./pages/Cart";

function App() {
  // const [user, setUser] = useState('');
  // const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  // const name = "John Doe";
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('http://127.0.0.1:8000/user', {
  //       headers: { 'Content-type': 'application/json' },
  //       method: 'GET',
  //       credentials: 'include',
  //     });
  //
  //     const content = await response.json();
  //     const myArray = Object.values(response);
  //
  //     sleep(2000)
  //       .then(() => {
  //         alert('Welcome back');
  //       })
  //
  //
  //     if (content.email !== undefined) {
  //       setUser(content.email);
  //       alert(content.email);
  //     } else {
  //       setUser('');
  //     }
  //   })();
  // });

  return (
      <div className="w-full overflow-hidden bg-primary dark">
        <div className="flex justify-center items-center">
          <div className="w-full">
            {/*<Navbar/>*/}
            <Routes>
              <Route path="/" element={<Navbar/>}>
              {/*<Route path="/" element={<Navbar name={user} setName={setUser} />}>*/}
                <Route index element={<Homepage/>} />
                <Route path="shop" element={<Shop/>} />
                <Route path="product" element={<ProductPage/>} />
                <Route path="cart" element={<Cart/>} />


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
