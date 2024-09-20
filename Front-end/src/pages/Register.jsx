import  { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !number || !password) {
      alert('Please fill in all fields');
      return;
    }
    register({ fullName, email, number, password });
  };

  return (
    <>
      <div className='h-[90vh] w-full relative flex items-center justify-center font-mono overflow-hidden'>
        <div className='w-[30%] max-[700px]:w-[80%]'>
          <h1 className='text-3xl text-gray-600 font-bold'>
            Welcome to <br />
            <span className='text-gray-600 text-xl'>Selfbook.in</span>
          </h1>
          <h4 className="text-lg mb-5 capitalize">Create your account</h4>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <input
              type='text'
              placeholder='Full Name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='p-2 outline-none border border-gray-400'
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-2 outline-none border border-gray-400'
            />
            <input
              type='number'
              placeholder='Number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className='p-2 outline-none border border-gray-400'
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-2 outline-none border border-gray-400'
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-[15px] font-medium hover:bg-gray-700 transition duration-300"
            >
              Register
            </button>
            <p className='text-center'>
              You Have Already An Account, <Link to={'/login'} className='text-blue-600 underline'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
