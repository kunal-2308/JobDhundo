const express = require('express');
const { register, login, check } = require('../controllers/user/authController');
const { signUp,loginRecruiter,logoutRecruiter } = require('../controllers/recruiter/authController'); // Ensure correct path

const router = express.Router();

router.post('/user/signup', register);
router.post('/user/login', login);
router.get('/check', check);

router.post('/recruiter/signup', signUp);
router.post('/recruiter/login',loginRecruiter);
router.get('/recruiter/logout',logoutRecruiter);

module.exports = router; // Export the router
