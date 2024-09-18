import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; // Importing icons from react-icons
import { FaFacebook, FaInstagram, FaTwitter,FaYoutube } from 'react-icons/fa';
import { CiSearch, CiUser } from 'react-icons/ci';
import UserProfile from '../user/UserProfile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile= () => {
    setIsProfileOpen(!isProfileOpen);
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
    className="sticky top-0 bg-white z-50 w-full flex items-center justify-between py-4 px-8 md:px-[8%]  border-b-[.3px] border-black"
    style={{ boxShadow: '0 4px 6px -1px rgba(128, 128, 128, 0.1), 0 2px 4px -2px rgba(128, 128, 128, 0.1)' }}
  >
      <h1 className='text-xl  font-mono uppercase'>
        Selfbook<span className='text-blue-600 font-bold'>.in</span>
      </h1>
      <div className={`md:flex gap-3 md:items-center font-mono`}>
        <Link to="/" className='hidden md:block text-gray-600 text-[.99rem]  px-2'>Home</Link>
        <Link to="/e-books" className='hidden md:block text-gray-600 text-[.99rem]  px-2'>Ebooks</Link>
        <Link to="/about" className='hidden md:block text-gray-600 text-[.99rem]  px-2'>About Us</Link>
        <Link to="/contact" className='hidden md:block text-gray-600 text-[.99rem]  px-2'>Contact Us</Link>
      </div>
     <div className='flex items-center gap-2'>
       <div className='icons flex text-[1.5rem] gap-2 md:gap-3 font-extrabold font-mono'>
      <CiSearch className='cursor-pointer'/>
      <button onClick={toggleProfile} >
        <CiUser className="cursor-pointer text-2xl" />
      </button>

      <UserProfile  isOpen={isProfileOpen} toggleProfile={toggleProfile} />

      </div>
      <div className="  ml-0 md:hidden">
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
        <div className="flex  flex-col h-full items-start justify-between p-6 font-mono">
          <div>
          <RiCloseLine className="text-2xl text-gray-600" onClick={toggleMenu} />
         <div className='flex flex-col items-start justify-between p-3'>
          <Link to="/" className='text-gray-600 text-xl font-semibold py-2' onClick={toggleMenu}> <i className="ri-home-5-fill mr-1"></i> Home</Link>
          <Link to="/e-books" className='text-gray-600 text-xl font-semibold py-2' onClick={toggleMenu}>
          <i className="ri-store-2-fill mr-2"></i>
          Ebooks
          </Link>
          <Link to="/about" className='text-gray-600 text-xl font-semibold py-2' onClick={toggleMenu}><i className="ri-shopping-cart-fill mr-1"></i> About Us</Link>
          <Link to="/contact" className='text-gray-600 text-xl font-semibold py-2' onClick={toggleMenu}><i className="ri-user-2-fill mr-1"></i> Contact Us</Link>
          </div>
          </div>
          <div className="socialicons text-xl flex items-center justify-between ">
           <div className='gap-2 flex'>
           <a href="https://www.facebook.com" className="text-gray-600 text-xl font-semibold py-2 flex items-center" onClick={toggleMenu}>
              <FaFacebook className="mr-2" /> 
            </a>
            <a href="https://www.twitter.com" className="text-gray-600 text-xl font-semibold py-2 flex items-center" onClick={toggleMenu}>
              <FaTwitter className="mr-2" /> 
            </a>
            <a href="https://www.instagram.com" className="text-gray-600 text-xl font-semibold py-2 flex items-center" onClick={toggleMenu}>
              <FaInstagram className="mr-2" /> 
            </a>
            <a href="https://www.instagram.com" className="text-gray-600 text-xl font-semibold py-2 flex items-center" onClick={toggleMenu}>
              <FaYoutube className="mr-2" /> 
            </a>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
