// // function to read the data from the user local storage
// const getAuth = async()=>{
//     const employee = await JSON.parse(localStorage.getItem('employee'))

//     if (employee && employee.employee_token){
//         const decodedToken = await deccodeTokenPayload(employee.employee_token);
//           employee.employee_role = decodedToken.employee_role;
//     employee.employee_id = decodedToken.employee_id;
//     employee.employee_first_name = decodedToken.employee_first_name;

//     return employee
//     } else{
//         return{};
//     }
   
// };

// // function too decode the payload from the token
// // the purpose of this code is to take a jwt token , extract its payload, decode it from base64url encoding , and then convert the decode payload into a javasceipt object for further use abd manipulaion

// const deccodeTokenPayload = (token)=>{
//     const base64Url = token.split('.') [1];
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     const jsonPayload = decodeURIComponent(
//         atob(base64)
//         .split('')
//         .map((c)=> `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
//         .join('')
//     );
//     return JSON.parse(jsonPayload);
// };

// export default getAuth



// const getAuth = () => {
//   const employee = JSON.parse(localStorage.getItem("employee"));

//   if (employee && employee.employee_token) {
//     const decodedToken = deccodeTokenPayload(employee.employee_token);
//     console.log("Decoded token:", decodedToken);

//     employee.employee_role =
//       decodedToken.employee_role ||
//       decodedToken.role ||
//       decodedToken.user_role ||
//       decodedToken.employeeRole;

//     employee.employee_id = decodedToken.employee_id;
//     employee.employee_first_name = decodedToken.employee_first_name;

//     return employee;
//   } else {
//     return {};
//   }
// };

// const deccodeTokenPayload = (token) => {
//   const base64Url = token.split(".")[1];
//   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//   const jsonPayload = decodeURIComponent(
//     atob(base64)
//       .split("")
//       .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
//       .join("")
//   );
//   return JSON.parse(jsonPayload);
// };

// export default getAuth;


// Function to read data from user local storage
const getAuth = () => {
  const employee = JSON.parse(localStorage.getItem("employee"));

  if (employee && employee.employee_token) {
    const decodedToken = deccodeTokenPayload(employee.employee_token);
    console.log("Decoded token:", decodedToken);

    employee.employee_role =
      decodedToken.employee_role ||
      decodedToken.employee_role_id || // ✅ added for your case
      decodedToken.role ||
      decodedToken.user_role;

    employee.employee_id = decodedToken.employee_id;
    employee.employee_first_name = decodedToken.employee_first_name;

    return employee;
  } else {
    return {};
  }
};

// Function to decode payload from token
const deccodeTokenPayload = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export default getAuth;
