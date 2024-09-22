import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon from react-icons
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

const UserProfile = ({ isOpen, toggleProfile }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); 
    toggleProfile(); 
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleProfile}
        />
      )}

      {/* User Profile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-76 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:w-80`}
      >
        {/* Close Icon for mobile/desktop */}
        <div className="p-4 text-right">
          <button onClick={toggleProfile} className="text-gray-600 hover:text-gray-800">
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>

        {/* User Info Section */}
        <div className="flex items-center p-4 ">
          
          <div className='relative w-[80px] h-[80px] overflow-hidden mr-2'>
          <img
            src={user.profileImage || 'https://via.placeholder.com/100'} 
            alt="User Avatar"
            className="rounded-full bg-zinc-600 h-full w-full  object-cover mr-4"
          />
          </div>
         


          <div className="flex flex-col">
            <h2 className="text-xl font-mono font-semibold">
              {user?.fullName || 'Guest User'} 
            </h2>
            <p className="text-gray-500 text-sm font-mono">
              {user?.email || 'guest@example.com'} 
            </p>
          </div>
        </div>

        {/* Links Section */}
        <nav className="mt-8 w-full px-0">
          <ul className="space-y-2 font-mono">
            <li>
              <Link 
                onClick={toggleProfile}
                to="/profile/your-books" 
                className='text-gray-600 px-4 text-xl font-semibold py-2 w-full block border-y border-gray-300'
              >
                Your Books
              </Link>
            </li>
            <li>
              <Link 
              onClick={toggleProfile}
                to="/profile/liked-books" 
                className='text-gray-600  px-4 text-xl font-semibold py-2 w-full block border-b border-gray-300'
              >
                Liked Books
              </Link>
            </li>
            <li>
              <Link 
              onClick={toggleProfile}
                to="/profile/saved" 
                className='text-gray-600  px-4 text-xl font-semibold py-2 w-full block border-b border-gray-300'
              >
                Saved
              </Link>
            </li>
            <li>
              <Link 
              onClick={toggleProfile}
                to={`/profile/edit/${user?._id}`} 
                className='text-gray-600  px-4 text-xl font-semibold py-2 w-full block border-b border-gray-300'
              >
                Edit Profile
              </Link>
            </li>
            {user ? (
              <li>
                <button 
                  onClick={handleLogout}
                  className='text-red-600 text-start px-4 text-xl font-semibold py-2 w-full block border-b border-gray-300'
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link 
                  onClick={toggleProfile}
                  to="/login" 
                  className='text-blue-600  px-4 text-xl font-semibold py-2 w-full block border-b border-gray-300'
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default UserProfile;
