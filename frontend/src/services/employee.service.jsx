// Import from the env
const api_url = import.meta.env.VITE_API_URL

// a function to send post request to create a new employee
const createEmployee = async (formData, loggedInEmployeeToken) =>
   {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': loggedInEmployeeToken
    },
    body: JSON.stringify(formData)
}
    console.log(requestOptions);
    const response = await fetch(`${api_url}/api/employee`,requestOptions);
    
    return response;
    }
    // a function to send get request to get all employees
    const getAllEmployees = async (token) =>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
        },
    }
        const response = await fetch(`${api_url}/api/employee`,requestOptions);
        return response;
    }
// export
const employeeService={
    createEmployee,
    getAllEmployees
}
export default employeeService;
