const express = require('express');
const router = express.Router();
const jwt = require('../config/jwttokenverify');

const userActions = require('../controllers/user.controller');

router.post('/register', userActions.registerUser);
router.post('/login', userActions.authenticate);
router.get('/userProfile',jwt.verifyJwtToken, userActions.userProfile);

module.exports = router;