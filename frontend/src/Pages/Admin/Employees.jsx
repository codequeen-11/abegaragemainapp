import React from 'react'
// import ht auth hook// to know is roles
import{useAuth}  from '../../Context/AuthContext';
// import loginform component
import LoginForm from '../../Components/LoginForm/LoginForm'
function Employees() {
  const {isLogged, isAdmin} = useAuth();

  if (isLogged){
    if (isAdmin){
      return (
        <div>
          <h1>Employees Page - Admin Access</h1>
        </div>
      )
    }else{
      return (
        <div>
          <h1> you are not authorised to access this page</h1>
        </div>
      )
    }
  }else{
    return (
      <div>
        <LoginForm />
      </div>
    )
  } 
 
}

export default Employees