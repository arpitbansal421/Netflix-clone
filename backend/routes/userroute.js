const express = require('express');
const { Register, Logout, Login } = require('../controllers/user'); // Destructure the imported object

const Router = express.Router();

Router.route('/register').post(Register);
Router.route('/login').post(Login);
Router.route('/logout').get(Logout);

module.exports = Router;

    