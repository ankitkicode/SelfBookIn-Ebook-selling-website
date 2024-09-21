const User = require('../models/userModel');

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

module.exports = { getUserDataById };
