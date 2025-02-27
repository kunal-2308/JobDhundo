const express = require('express');
const getUserProfile = require('../controllers/user/profileController');

const router = express.Router();

router.get('/get/user/profile',getUserProfile);

module.exports = router;