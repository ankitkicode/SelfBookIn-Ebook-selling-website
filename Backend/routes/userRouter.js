const express = require('express');
const auth = require('../middlewares/authMiddleware');
const { getUserDataById, editProfile } = require('../controllers/userControllers');
const router = express.Router();


router.get('/user/:id', auth, getUserDataById);
router.put('/edit-profile',auth, editProfile); 

module.exports = router;