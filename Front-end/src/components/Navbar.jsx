import { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; 
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { CiSearch, CiUser } from 'react-icons/ci';
import UserProfile from '../user/UserProfile';
import AuthContext from '../context/AuthContext'; 


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const toggleProfile = () => {
    if (user) {
      setIsProfileOpen(!isProfileOpen);
    } else {
      navigate('/login');
    }
  };

  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      className="sticky top-0 bg-white z-50 w-full flex items-center justify-between py-4 px-8 md:px-[8%] border-b-[.3px] border-black"
      style={{ boxShadow: '0 4px 6px -1px rgba(128, 128, 128, 0.1), 0 2px 4px -2px rgba(128, 128, 128, 0.1)' }}
    >
      <h1 className='text-xl font-mono uppercase'>
        Selfbook<span className='text-blue-600 font-bold'>.in</span>
      </h1>

      <div className={`md:flex gap-3 md:items-center font-mono`}>
        <Link to="/" className='hidden md:block text-gray-600 text-[.99rem] px-2'>Home</Link>
        <Link to="/e-books" className='hidden md:block text-gray-600 text-[.99rem] px-2'>Ebooks</Link>
        <Link to="/about" className='hidden md:block text-gray-600 text-[.99rem] px-2'>About Us</Link>
        <Link to="/contact" className='hidden md:block text-gray-600 text-[.99rem] px-2'>Contact Us</Link>
      </div>

      <div className='flex items-center gap-2'>
        <div className='icons flex text-[1.5rem] gap-2 md:gap-3 font-extrabold font-mono'>
          <CiSearch className='cursor-pointer' />
          
          <button onClick={toggleProfile}>
            <CiUser className="cursor-pointer text-2xl" />
          </button>
          
          {user && <UserProfile isOpen={isProfileOpen} toggleProfile={toggleProfile} />}
        </div>

        <div className="ml-0 cursor-pointer md:hidden">
          {isMenuOpen ? (
            <RiCloseLine className="text-2xl text-gray-600" onClick={toggleMenu} />
          ) : (
            <RiMenuLine className="text-2xl text-gray-600" onClick={toggleMenu} />
          )}
        </div>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-2/3 max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
{/* Redesigned Menu Component with Social Icons */}
<div className="flex flex-col h-full items-start justify-between p-4 font-mono bg-white">
  {/* Close Button */}
  <div className="self-end mb-4 mr-5">
    <button
      className="text-2xl text-gray-600 font-bold focus:outline-none"
      onClick={toggleMenu}
    >
      X
    </button>
  </div>

  {/* Menu Links */}
  <div className="w-full ">
    <Link
      to="/"
      className="block text-gray-800 border-y-2 text-xl font-semibold py-3 hover:text-indigo-600 transition duration-300 ease-in-out"
      onClick={toggleMenu}
    >
      Home
    </Link>
    <Link
      to="/e-books"
      className="block text-gray-800 border-b-2 text-xl font-semibold py-3 hover:text-indigo-600 transition duration-300 ease-in-out"
      onClick={toggleMenu}
    >
      Ebooks
    </Link>
    <Link
      to="/about"
      className="block text-gray-800 border-b-2 text-xl font-semibold py-3 hover:text-indigo-600 transition duration-300 ease-in-out"
      onClick={toggleMenu}
    >
      About Us
    </Link>
    <Link
      to="/contact"
      className="block text-gray-800 border-b-2 text-xl font-semibold py-3 hover:text-indigo-600 transition duration-300 ease-in-out"
      onClick={toggleMenu}
    >
      Contact Us
    </Link>
  </div>

  {/* Social Media Icons */}
  <div className="mt-auto w-full flex items-center justify-start space-x-4 pt-6">
    <a
      href="https://www.facebook.com"
      className="text-gray-600 text-xl hover:text-indigo-600 transition duration-300 ease-in-out"
      onClick={toggleMenu}
    >
      <FaFacebook />
    </a>
    <a
      href="https://www.twitter.com"
      className="text-gray-600 text-xl hover:text-indigo-600 transition duration-300 ease-in-out"
      onClick={toggleMenu}
    >
      <FaTwitter />
    </a>
    <a
      href="https://www.instagram.com"
      className="text-gray-600 text-xl hover:text-indigo-600 transition duration-300 ease-in-out"
      onClick={toggleMenu}
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.youtube.com"
      className="text-gray-600 text-xl hover:text-indigo-600 transition duration-300 ease-in-out"
      onClick={toggleMenu}
    >
      <FaYoutube />
    </a>
  </div>
</div>


      </div>
    </div>
  );
};

export default Navbar;
