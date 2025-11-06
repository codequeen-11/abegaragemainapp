 // Import the employee service 
const employeeService = require('../Services/employee.service');

// console.log(req.headers)

// Create the add employee controller
async function createEmployee(req, res, next) {
  // console.log("📩 Received employee data:", req.body);
console.log(req.headers)

  try {
    // Check if employee email already exists in the database 
    const employeeExists = await employeeService.checkIfEmployeeExists(req.body.employee_email);

    if (employeeExists) {
      return res.status(400).json({
        error: "This email address is already associated with another employee!"
      });
    }

    // Create the employee
    const employee = await employeeService.createEmployee(req.body);
    if (!employee) {
      return res.status(400).json({
        error: "Failed to add the employee!"
      });
    }

    res.status(200).json({ status: "true" });
    
  } catch (error) {
    console.log("❌ Error creating employee:", error);
    res.status(500).json({
      error: "Something went wrong!",
      details: error.message
    });
  }
}

// Export the controller
module.exports = { createEmployee };
