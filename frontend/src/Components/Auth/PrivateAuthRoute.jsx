import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import getAuth from '../../util/Auth';

const PrivateAuthRoute = ({ roles, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const loggedInEmployee = getAuth(); // returns object
    console.log("Logged in employee:", loggedInEmployee);

    if (loggedInEmployee?.employee_token) {
      setIsLogged(true);

      if (
        roles?.map(String).includes(String(loggedInEmployee.employee_role))
      ) {
        setIsAuthorized(true);
      }
    }

    setIsChecked(true);
  }, [roles]);

  if (!isChecked) return null;

  if (!isLogged) return <Navigate to="/login" replace />;
  if (!isAuthorized) return <Navigate to="/unauthorized" replace />;

  return children;
};

export default PrivateAuthRoute;
