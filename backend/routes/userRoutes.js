const express = require('express');
const {getUserProfile,checkCookie} = require('../controllers/user/profileController');

const router = express.Router();

router.get('/get/user/profile',getUserProfile);
router.get('/check/cookie',checkCookie);

module.exports = router;