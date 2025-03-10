const express = require('express');
const { signupManager } = require('../controllers/manager/authController');
let router = express.Router();

router.post('/signup',signupManager);

module.exports = router;