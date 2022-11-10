import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { Notfound } from './pages/Notfound';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState('');
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    (async () => {
      const response = await fetch('http://127.0.0.1:8000/user', {
        headers: { 'Content-type': 'application/json' },
        method: 'GET',
        credentials: 'include',
      });

      const content = await response.json();
      const myArray = Object.values(response);

      sleep(2000)
        .then(() => {
          alert('Welcome back');
        })


      if (content.email !== undefined) {
        setUser(content.email);
        alert(content.email);
      } else {
        setUser('');
      }
    })();
  });

  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="flex justify-center items-center">
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Navbar name={user} setName={setUser} />}>
              <Route index element={<Homepage />} />
            </Route>
            <Route path="*" element={<Notfound />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
