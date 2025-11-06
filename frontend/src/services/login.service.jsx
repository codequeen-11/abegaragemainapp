 // Import from the env
const api_url = import.meta.env.VITE_API_URL;
// A function to send the login request to the server 
const logIn = async (formData) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  };
  console.log("About to send request");
  console.log(requestOptions.body);
  const response = await fetch(`${api_url}/api/employee/login`, requestOptions);
  return response;
}

// /a function to logout the user
const logOut = ()=>{
  localStorage.removeItem("employee");
};

// ✅ Export as object (so you can call loginService.logIn)
const loginService = { logIn, logOut };

export default loginService;
