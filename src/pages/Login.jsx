import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    login({ email, password });
  };

  return (
    <div className='h-[80vh] w-full relative flex items-center justify-center font-mono'>
      <div className='w-[30%] max-[700px]:w-[80%]'>
        <h1 className='text-3xl font-bold text-gray-600'>
          Welcome to <br />
          <span className='text-gray-600 text-xl'>Selfbook.in</span>
        </h1>
        <h4 className="text-lg mb-5 capitalize">Access your account</h4>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-2 outline-none border border-gray-400'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-2 outline-none border border-gray-400'
          />
          <p className='text-blue-600 text-sm underline'>Forgot Password?</p>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-[15px] font-medium hover:bg-gray-700 transition duration-300"
          >
            Login
          </button>
          <p className='text-center'>
            You Don't Have An Account, <Link to={'/register'} className='text-blue-600 underline'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
