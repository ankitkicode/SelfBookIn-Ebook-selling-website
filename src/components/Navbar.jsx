import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; // Importing icons from react-icons
import { FaFacebook, FaInstagram, FaTwitter,FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating
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
    className="sticky top-0 bg-white z-50 w-full flex items-center justify-between py-4 px-10 border-b-[.5px] border-black"
    style={{ boxShadow: '0 4px 6px -1px rgba(128, 128, 128, 0.1), 0 2px 4px -2px rgba(128, 128, 128, 0.1)' }}
  >
      <h1 className='text-xl font-semibold uppercase'>
        Selfbook<span className='text-blue-600 font-bold'>.in</span>
      </h1>
      <div className={`md:flex md:items-center`}>
        <Link to="/" className='hidden md:block text-gray-600 text-sm font-semibold px-2'>Home</Link>
        <Link to="/products" className='hidden md:block text-gray-600 text-sm font-semibold px-2'>Products</Link>
        <Link to="/cart" className='hidden md:block text-gray-600 text-sm font-semibold px-2'>Cart</Link>
        <Link to="/profile" className='hidden md:block text-gray-600 text-sm font-semibold px-2'>My Account</Link>
      </div>
      <div className="md:hidden">
        {isMenuOpen ? (
          <RiCloseLine className="text-2xl text-gray-600" onClick={toggleMenu} />
        ) : (
          <RiMenuLine className="text-2xl text-gray-600" onClick={toggleMenu} />
        )}
      </div>
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-2/3 max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex  flex-col h-full items-start justify-between p-6">
          <div>
          <RiCloseLine className="text-2xl text-gray-600" onClick={toggleMenu} />
         <div className='flex flex-col items-start justify-between p-3'>
          <Link to="/" className='text-gray-600 text-sm font-semibold py-2' onClick={toggleMenu}> <i class="ri-home-5-fill mr-1"></i> Home</Link>
          <Link to="/products" className='text-gray-600 text-sm font-semibold py-2' onClick={toggleMenu}>
          <i class="ri-store-2-fill mr-2"></i>
          Products
          </Link>
          <Link to="/cart" className='text-gray-600 text-sm font-semibold py-2' onClick={toggleMenu}><i className="ri-shopping-cart-fill mr-1"></i> Cart</Link>
          <Link to="/profile" className='text-gray-600 text-sm font-semibold py-2' onClick={toggleMenu}><i class="ri-user-2-fill mr-1"></i> Account</Link>
          </div>
          </div>
          <div className="socialicons text-xl flex items-center justify-between ">
           <div className='gap-2 flex'>
           <a href="https://www.facebook.com" className="text-gray-600 text-sm font-semibold py-2 flex items-center" onClick={toggleMenu}>
              <FaFacebook className="mr-2" /> 
            </a>
            <a href="https://www.twitter.com" className="text-gray-600 text-sm font-semibold py-2 flex items-center" onClick={toggleMenu}>
              <FaTwitter className="mr-2" /> 
            </a>
            <a href="https://www.instagram.com" className="text-gray-600 text-sm font-semibold py-2 flex items-center" onClick={toggleMenu}>
              <FaInstagram className="mr-2" /> 
            </a>
            <a href="https://www.instagram.com" className="text-gray-600 text-sm font-semibold py-2 flex items-center" onClick={toggleMenu}>
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
