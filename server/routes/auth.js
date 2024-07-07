const express = require('express');
const router = express.Router();
const {signupNewUser} = require('../controllers/auth')

router.post('/signup',signupNewUser)

module.exports = router
