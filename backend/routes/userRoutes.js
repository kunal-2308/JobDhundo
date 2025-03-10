const express = require('express');
const {getUserProfile,checkCookie, updateProfile} = require('../controllers/user/profileController');
const protectedUser = require('../middleware/protectedUser');
const router = express.Router();

router.get('/get/user/profile',protectedUser,getUserProfile);
router.get('/check/cookie',protectedUser,checkCookie);
router.post('/update/profile',protectedUser,updateProfile);

module.exports = router;