
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[80vh] w-full relative flex items-center justify-center font-mono' >
  <div className='w-[30%]  max-[700px]:w-[80%] '>
    <h1 className='text-3xl font-bold text-gray-600'>Welcome to <br /><span className='text-blue-500 text-xl'>Selfbook.in</span></h1>
    <h4 className="text-lg mb-5 capitalize">Access your account</h4>
    <form className='flex flex-col space-y-4'>
      {/* <input type='text' placeholder='Full Name' className='p-2 outline-none border border-gray-400 ' /> */}
      <input type='email' placeholder='Email' className='p-2 outline-none border border-gray-400 ' />
      {/* <input type='number' placeholder='Number' className='p-2 outline-none border border-gray-400 ' /> */}
      <input type='password' placeholder='Password' className='p-2 outline-none border border-gray-400 ' />
      <button
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-[15px] font-medium hover:bg-gray-700 transition duration-300"
>          Login</button>
      <p className='text-center'>You Don't Have An Account, <Link to={'/register'} className='text-blue-600 underline'>Register</Link> </p>
    </form>

  </div>
  </div>
  )
}

export default Login
