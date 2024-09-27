import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext"; 

const EditProfile = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    profileImage: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.fullName,
        email: user.email,
        phone: user.number || "",
        profileImage: user.profileImage || "",
      });
      setImagePreview(user.profileImage || null);
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  // Upload image to Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'selfbook'); 
    formData.append('cloud_name', 'deq8waa4u');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/deq8waa4u/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      return data.secure_url; 
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      return null;
    }
  };

  // Handle profile picture selection and upload to Cloudinary
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const imageUrl = await uploadToCloudinary(file); 

      if (imageUrl) {
        setProfileData({
          ...profileData,
          profileImage: imageUrl, 
        });
        setImagePreview(imageUrl); 
      }

      setLoading(false);
    }
  };

  // Clear selected profile picture
  const clearProfileImage = () => {
    setProfileData({
      ...profileData,
      profileImage: "",
    });
    setImagePreview(null);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation (basic email and phone check)
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\+?[0-9]{10,14}$/;

    if (!emailRegex.test(profileData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(profileData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Update user profile using the context function
    try {
       await updateProfile(profileData); 
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("There was an error updating your profile.");
    }
  };

  return (
    <div className="min-h-[80vh] w-full px-4 sm:px-6 md:px-[8%] py-10 bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Edit Profile</h2>

        {/* Profile Picture Preview */}
        <div className="flex flex-col justify-center items-center mb-6">
          <div className="relative">
            <img
              src={imagePreview || "https://via.placeholder.com/150"} // Placeholder if no image is selected
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange} // Handle image selection and upload to Cloudinary
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          {imagePreview && (
            <button
              onClick={clearProfileImage}
              className="mt-3 text-sm text-red-600 underline hover:text-red-800"
            >
              Remove Image
            </button>
          )}
        </div>

        {/* Profile Edit Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={loading}  
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
