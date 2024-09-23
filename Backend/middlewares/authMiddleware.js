const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'yourSecretKey';

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');

  // Check if the header exists and starts with 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1]; 

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = auth;
