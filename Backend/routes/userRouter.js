const express = require('express');
const auth = require('../middlewares/authMiddleware');
const { getUserDataById } = require('../controllers/userControllers');
const router = express.Router();


router.get('/user/:id', auth, getUserDataById); 

module.exports = router;