
import { Link } from 'react-router-dom'

const Register = () => {
  return (
  <>
  <div className='h-[90vh] w-full relative flex items-center justify-center font-mono overflow-hidden'>
  <div className='w-[30%]  max-[700px]:w-[80%] '>
    <h1 className='text-3xl text-gray-600 font-bold'>Welcome to <br /><span className='text-blue-500 text-xl'>Selfbook.in</span></h1>
    <h4 className="text-lg mb-5 capitalize">create your account</h4>
    <form className='flex flex-col space-y-4'>
      <input type='text' placeholder='Full Name' className='p-2 outline-none border border-gray-400 ' />
      <input type='email' placeholder='Email' className='p-2 outline-none border border-gray-400 ' />
      <input type='number' placeholder='Number' className='p-2 outline-none border border-gray-400 ' />
      <input type='password' placeholder='Password' className='p-2 outline-none border border-gray-400 ' />
      <button 
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-[15px] font-medium hover:bg-gray-700 transition duration-300"
          >Register</button>
      <p className='text-center'>You Have Already An Account, <Link to={'/login'} className='text-blue-600 underline'>Login</Link> </p>
    </form>

  </div>
  </div>
  </>
  )
}

export default Register
