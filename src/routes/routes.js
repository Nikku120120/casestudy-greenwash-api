const express = require('express');
const router = express.Router();

const userActions = require('../controllers/user.controller');

router.post('/register', userActions.registerUser);

module.exports = router;