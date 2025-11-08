// Import the express module  
const express = require('express');
// Call the router method from express to create the router 
const router = express.Router();
// Import the employee controller
const employeeController = require('../Controllers/employee.controller');
// import the auth middleware
const authMiddleware = require('../middlewares/middlwares.auth');
// Create a route to handle the add employee request on post
router.post("/api/employee", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.createEmployee);

// create a route to hundle the the get all employee request on get
router.get("/api/employee", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.getAllEmployees);

// router.delete("/api/employee/:id", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.deleteEmployee);
// Export the router
module.exports = router;




















// Import the express module  
// const express = require('express');
// // Call the router method from express to create the router 
// const router = express.Router();
// // Import the employee controller
// const employeeController = require('../Controllers/employee.controller');
// // Import the auth middleware
// const authMiddleware = require('../middlewares/middlwares.auth');

// // ============================================
// // Create (Add) Employee
// // ============================================
// router.post(
//   "/api/employee",
//   [authMiddleware.verifyToken, authMiddleware.isAdmin],
//   employeeController.createEmployee
// );

// // ============================================
// // Get All Employees
// // ============================================
// router.get(
//   "/api/employee",
//   [authMiddleware.verifyToken, authMiddleware.isAdmin],
//   employeeController.getAllEmployees
// );

// // ============================================
// // Delete Employee by ID
// // ============================================
// router.delete(
//   "/api/employee/:id",
//   [authMiddleware.verifyToken, authMiddleware.isAdmin],
//   employeeController.deleteEmployee
// );

// // ============================================
// // Export the router
// // ============================================
// module.exports = router;
