const express = require('express');
const {register, login, check} = require('../controllers/authController');

const router = express.Router();


router.post('/user/signup',register);
router.post('/user/login',login);
router.get('/check',check);

module.exports = router;

