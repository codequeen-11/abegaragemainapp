// import the login service
const loginService = require('../Services/login.service');
// import jsonwebtoken to generate tokens
const jwt = require('jsonwebtoken');
// import the secret key from environment variables
const jwtSecret = process.env.JWT_SECRET;

// handle employee login
async function login(req, res, next){
    try{
        console.log(req.body)
       
        const employeeData = (req.body); 
        // call the login method from the login service
        const employee = await loginService.login(employeeData);
        // if the employee is not found
        if (employee.status === "fail") {
            return res.status(400).json({
                ststus: employee.status,
                 message: employee.message });
        }
        // if successful, send a responsen to the client
        const payload  ={
            employee_id: employee.data.employee_id,
            employee_email: employee.data.employee_email,
            employee_role_id: employee.data.company_role_id,
            employee_first_name: employee.data.employee_first_name,
        };
        const token = jwt.sign(payload,  jwtSecret, { expiresIn: '24h' });
        const sendBack ={
            employee_token: token,

        }
        res.status(200).json({
            status: "success",
            message: "employee logged in successfuly",
            data:  sendBack
        });
         
    }catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
}

// export the login controller function for use in other modules
module.exports = { login };