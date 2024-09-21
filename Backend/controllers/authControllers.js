const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey";


const createUser = async (req, res) => {
  console.log(req.body,"===============")
  const { fullName, email, number, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const user = new User({ fullName, email, number, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
      });

    res.status(201).json({ message: 'User created successfully', user,token });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
};


const loginUser = async (req, res) => {
  console.log(req.body)
 const { email, password } = req.body;
 try {
    const user = await User.findOne({ email }); // Find the user by email

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await user.comparePassword(password);
    
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
    });
    
    res.status(200).json({ message: 'User logged in successfully', user, token });
  } catch (error) {
    res.status(400).json({ message: 'Error logging in', error });
  }
};


module.exports = { createUser,loginUser };
