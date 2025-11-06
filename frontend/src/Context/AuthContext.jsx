// import react and the hooks we need here
import React, { useState, useEffect, useContext} from "react";
// import the util function we created to handle from the local storage 
import getAuth from "../util/Auth";
// create a context object
const AuthContext = React.createContext();

// create a custom hook to use the context
export const useAuth = () =>{
    return useContext(AuthContext)
}

// create a provider component 
export const AuthProvider = ({ children}) =>{
    const [isLogged, setIsLogged]= useState(false);
    const [isAdmin, setIsAdmin]= useState(false);
    const [employee, setEmployee]= useState(null);

    const value = { isLogged, isAdmin, employee, setIsAdmin, setIsLogged, setEmployee}

    useEffect(() => {
  const loggedInEmployee = getAuth();

  if (loggedInEmployee?.employee_token) {
    setIsLogged(true);

    if (Number(loggedInEmployee.employee_role) === 3) {
      setIsAdmin(true);
    }

    setEmployee(loggedInEmployee);
  }
}, []);

    return(
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
    )
}