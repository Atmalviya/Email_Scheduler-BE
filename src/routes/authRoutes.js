const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.get('/islogin', authMiddleware, authController.islogin);

module.exports = router;
