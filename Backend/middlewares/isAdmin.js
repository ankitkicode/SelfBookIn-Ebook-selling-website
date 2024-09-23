const jwt = require('jsonwebtoken'); 
const User = require("../models/userModel"); // Make sure this is correct
const secretKey = process.env.JWT_SECRET || 'yourSecretKey';

const isAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];
  // console.log({
  //   token,
  //   secretKey
  // })

  try {
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // console.log({
    //   user
    // })

    if (user.role === 'admin') {
      req.user = decoded;
      return next();
    } else {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  } catch (error) {
    console.error("Token verification error:", error.message); // Log the error message
    return res.status(400).json({ message: `Invalid token: ${error.message}` });
  }
};

module.exports = isAdmin;
