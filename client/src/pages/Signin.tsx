import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      setRedirect(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0">
        <Link to="/" className="flex items-center mb-6 text-3xl font-semibold text-white">
          Keyboardist
        </Link>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-600 focus:border-cyan-600"
                  placeholder="example@keyboardist.kz"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-600 focus:border-cyan-600"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded focus:ring-3 focus:ring-cyan-300 bg-gray-700 border-gray-600 focus:ring-cyan-600 ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-cyan-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-800">
                Sign in
              </button>
              <p className="text-sm font-light text-gray-400">
                Don’t have an account yet?{' '}
                <Link to="/signup" className="font-medium text-cyan-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signin };
