const express = require('express');
const getUserProfile  = require('../user/profileController.js');

const router = express.Router();

//User Profile Routes
router.get('/get/user/profile',getUserProfile);

module.exports = router;