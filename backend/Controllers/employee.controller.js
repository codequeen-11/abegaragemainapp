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


// create the get all controller
 async function getAllEmployees (req, res, next){
  // call the getallemployees method from the employee service
  const employees = await employeeService.getAllEmployees();
  console.log(employees)
  if(!employees){
    res.status(400).json({
      error: 'failed to get all employees!'
    })
  }else{
    res.status(200).json({
      status: "success",
      data: employees,

    })
  }

}
 

// Export the controller
module.exports = { createEmployee,  getAllEmployees };


// // Import the employee service 
// const employeeService = require('../Services/employee.service');

// // Existing createEmployee here...

// // Get all employees
// async function getAllEmployees(req, res) {
//   try {
//     const employees = await employeeService.getAllEmployees();
//     res.status(200).json(employees);
//   } catch (error) {
//     console.error("❌ Error fetching employees:", error);
//     res.status(500).json({ error: "Failed to fetch employees" });
//   }
// }

// // Delete employee
// async function deleteEmployee(req, res) {
//   const { id } = req.params;
//   try {
//     const deleted = await employeeService.deleteEmployee(id);
//     if (!deleted) {
//       return res.status(404).json({ error: "Employee not found!" });
//     }
//     res.status(200).json({ message: "Employee deleted successfully!" });
//   } catch (error) {
//     console.error("❌ Error deleting employee:", error);
//     res.status(500).json({ error: "Failed to delete employee" });
//   }
// }

// // Export all
// module.exports = { 
//   createEmployee,
//   getAllEmployees,
//   deleteEmployee
// };



// const employeeService = require('../Services/employee.service');

// async function createEmployee(req, res, next) {
//   try {
//     const employeeExists = await employeeService.checkIfEmployeeExists(req.body.employee_email);

//     if (employeeExists) {
//       return res.status(400).json({ error: "This email is already registered!" });
//     }

//     const employee = await employeeService.createEmployee(req.body);
//     if (!employee) {
//       return res.status(400).json({ error: "Failed to add employee!" });
//     }

//     res.status(200).json({ status: "true", message: "Employee added successfully" });
//   } catch (error) {
//     console.error("Error creating employee:", error);
//     res.status(500).json({ error: "Internal server error", details: error.message });
//   }
// }

// module.exports = {
//   createEmployee
// };

