const express = require('express');
const {getUserProfile,checkCookie, updateProfile,uploadResume } = require('../controllers/user/profileController');
const protectedUser = require('../middleware/protectedUser');
const upload = require('../middleware/multerConfig'); // Import Multer config
// ***********************************************
const router = express.Router();

router.get('/get/user/profile',protectedUser,getUserProfile);
router.get('/check/cookie',protectedUser,checkCookie);
router.post('/update/profile',protectedUser,updateProfile);
router.post('/upload/resume',protectedUser, upload.single('resume'), uploadResume);  // 🔹 Upload resume route

// ********************************************
module.exports = router;