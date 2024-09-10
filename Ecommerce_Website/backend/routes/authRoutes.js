const express = require('express');
const { login, signup, logout } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout); // Add this line

module.exports = router;