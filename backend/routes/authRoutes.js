const express = require('express');
const {register} = require('../controllers/authController');

const router = express.Router();


router.post('/user/signup',register);

module.exports = router;

