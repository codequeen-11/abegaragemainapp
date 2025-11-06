// import express module
const express = require('express');
//  call router method from express to create router
const router = express.Router();
// import the install controller
const installController = require('../Controllers/install.controller');

// define a route to handle the installation request
router.get('/install', installController.install);

// export the router to be used in other modules
module.exports = router;