const express = require('express');
const controller = require('../controllers/userController');
const {isGuest, isLoggedin} = require('../middlewares/auth');

const router = express.Router();

//GET /signup: show signup form
router.get('/signup', isGuest, controller.signup);

//POST /: create new user
router.post('/', isGuest, controller.create);

//GET /login: show login form
router.get('/login', isGuest , controller.login);

//POST /login: verify user through login form
router.post('/login', isGuest, controller.loginAuth);

//GET /profile: show user profile page
router.get('/profile', isLoggedin, controller.profile);

//GET /logout: logout the user
router.get('/logout', isLoggedin, controller.logout);

module.exports = router;