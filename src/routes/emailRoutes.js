const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/schedule-email', authMiddleware, emailController.scheduleEmail);

module.exports = router;
