import React from 'react'
// import ht auth hook// to know is roles
import{useAuth}  from '../../Context/AuthContext';
// import loginform component
import LoginForm from '../../Components/LoginForm/LoginForm'
// import adminmenu component
import EmployeeList from '../../Components/Admin/EmployeeList/EmployeeList';
import AdminMenu from '../../Components/Admin/AdminMenu/AdminMenu';
function Employees() {
  const {isLogged, isAdmin} = useAuth();

  if (isLogged){
    console.log(kabe)
    if (isAdmin){
      return (
        
        <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <EmployeeList />
          </div>
        </div>
      </div>
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