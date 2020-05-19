const express = require('express');
const router = express.Router();
const jwt = require('../config/jwttokenverify');

const userActions = require('../controllers/user.controller');
const orders = require ('../controllers/order.controller')

router.post('/register', userActions.registerUser);
router.post('/login', userActions.authenticate);
router.get('/userProfile',jwt.verifyJwtToken, userActions.userProfile);
router.put('/updateProfile',jwt.verifyJwtToken, userActions.updateProfile);
router.post('/placeOrder',jwt.verifyJwtToken, orders.placeOrder);
router.get('/retreiveorders',jwt.verifyJwtToken, orders.retreiveOrders);
module.exports = router;
