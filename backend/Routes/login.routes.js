// import express module
const express = require('express');
//  call router method from express to create router
const router = express.Router();
// import the login controller
const loginController = require('../Controllers/login.controller');

// define a route to handle the login request on post
router.post('/api/employee/login', loginController.login);
// export the router to be used in other modules
module.exports = router;