require('dotenv').config();
// import jsonwebtoken packedge
const jwt = require('jsonwebtoken');
//import employee service
const employeeService = require('../Services/employee.service');


// middleware to verify the token
function verifyToken(req, res, next) {
    // get the token from the request headers
    const token = req.headers['x-access-token'];
   if (!token) {
        return res.status(403).send({
            status:'fail',
             message: 'No token provided!' 
            });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                status:'fail',
                 message: 'Unauthorized!' 
                });
        }
        req.employee_email = decoded.employee_email;
        next();
    });
        
}
// a function to check if the user is admin
const isAdmin = async (req, res, next) => {
//  let token = req.headers['x-access-token'];
//  console.log(req.employee_email)
 const employee_email = req.employee_email;
 const employee = await employeeService.getEmployeeByEmail(employee_email);
 if (employee[0].company_role_id === 3){
    next();
 }else{
    return res.status(403).send({
        status:'fail',
          error: ' not an admin!' 
        });
 }
}

const authMiddleware ={
    verifyToken, isAdmin
}
module.exports = authMiddleware
