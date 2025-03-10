const express = require('express');
const {getUserProfile,checkCookie, updateProfile} = require('../controllers/user/profileController');

const router = express.Router();

router.get('/get/user/profile',getUserProfile);
router.get('/check/cookie',checkCookie);
router.post('/update/profile',updateProfile);

module.exports = router;