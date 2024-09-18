
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon from react-icons

const UserProfile = ({ isOpen, toggleProfile }) => {
  const handleLogout = () => {
   
    console.log('Logout');
    toggleProfile()
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
        <div className="flex items-center p-4">
          {/* User Image */}
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="rounded-full w-18 h-18 mr-4"
          />

          {/* User Details (Name and Email) */}
          <div className="flex flex-col">
            <h2 className="text-xl font-mono font-semibold">John Doe</h2>
            <p className="text-gray-500 text-sm font-mono">johndoe@example.com</p>
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
                to="/profile/edit/0" 
                className='text-gray-600  px-4 text-xl font-semibold py-2 w-full block border-b border-gray-300'
              >
                Edit Profile
              </Link>
            </li>
            <li>
              <button 
                onClick={handleLogout}
                className='text-red-600 text-start px-4 text-xl font-semibold py-2 w-full block border-b border-gray-300'
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default UserProfile;
