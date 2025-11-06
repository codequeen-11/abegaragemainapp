// import the query function from the db.config.js file
const conn = require("../Config/db.config");
// import the bcrypt module to do the password comparison
const bcrypt = require('bcrypt');
// import the employee service to get employee by email
const employeeService = require('./employee.service');
// handle employee login
async function login(employeeData) {
    try {
        let returnData = {};//object to be returned
        const employee = await employeeService.getEmployeeByEmail(employeeData.employee_email);
        // console.log(employee);
        if (employee.length === 0) {
            returnData ={
                status: "fail",
                message: "employee does not exist"
            };
            return returnData;
    }
    const passwordMatch = await bcrypt.compare(employeeData.employee_password, employee[0].employee_password_hashed);
    if (!passwordMatch) {
        returnData ={
            status: "fail",
            message: "incorrect password"
        };
        return returnData;
    };
    returnData ={
        status: "success",
        data: employee[0]
    };
    return returnData;
}
    catch (error){
        console.log(error)

    }
}

// export the login function for use in other modules
module.exports = { login };