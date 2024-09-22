const User = require('../models/userModel');
const cloudinary = require('../config/cloudinaryConfig');

const getUserDataById = async (req, res) => {
    const id = req.params.id;

    // Validate the ID format (optional, but recommended)
    if (!id) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    try {
        const user = await User.findById(id).select('-password'); // Exclude password from the response
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching user data', error: err.message });
    }
};

const editProfile = async (req, res) => {
  try {
    const { name, email, phone, profileImage } = req.body;
    const userId = req.user;

    // Basic validation
    if (!name || !email || !phone) return res.status(400).json({ error: 'All fields are required.' });
    
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email format.' });

    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!phoneRegex.test(phone)) return res.status(400).json({ error: 'Invalid phone number format.' });

    // Find user and update
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    user.name = name;
    user.email = email;
    user.number = phone;
    user.profileImage = profileImage;

    const updatedUser = await user.save();

    return res.status(200).json({ user:updatedUser, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({ error: 'An error occurred while updating the profile.' });
  }
};


  
  

module.exports = { getUserDataById,editProfile };
