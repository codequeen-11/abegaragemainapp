import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { format } from "date-fns";
import { Table, Button} from 'react-bootstrap'
import { useAuth } from "../../../Context/AuthContext";
import employeeService from "../../../services/employee.service";

const EmployeeList = () => {
    const [employees, setEmployees] =useState([]);
    // a state to serve as a flag to show error message
    const [apiError , setApiError] = useState(false);
    // a state to store the error message 
    const [apiErroMessage , setApiErrorMessage] = useState(null)
    // to get the logged in employee token
    const { employee } = useAuth();
    // console.log(employee);
    let token = null; // to store the token
    if (employee){
        token = employee.employee_token
    }
    useEffect(() =>{
    //   call the getallemployees function
    const  allEmployees = employeeService.getAllEmployees(token);
    allEmployees.then((res) => {
        console.log(res)
        if(!res.ok){
            console.log(res.status)
            setApiError(true)
            if (res.status === 401){
                setApiErrorMessage("please login again");
            }else if (res.status === 403){
                setApiErrorMessage(" you are not authorized to view ths page")
            }else{
                setApiErrorMessage("please again later")
            }

        }
        return res.json()
    }).then((data) =>{
        if (data.data.length !==0){
            setEmployees(data.data);
        }
    }).catch((error) =>{
        console.log("error", error)
    })
}
     ,[]);
     return(
        <> 
        {apiError ? (
            <section className="contact-section">
                <div className="auto-container">
                    <div className="contact-title">
                        <h2>{}</h2>
                    </div>
                </div> 
            </section> ):(
            <section className="contact-section">
                <div className="auto-container">
                    <div className="contact-title">
                        <h2>Employees</h2>
                    </div> 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Active</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Added Date</th>
                                <th>Role</th>
                                <th>Edit/Delate</th>

                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) =>(
                                <tr key={employee.employee_id}>
                                    <td>{employee.active ? "Yes" : "No"}</td>
                                    <td>{employee.employee_first_name}</td>
                                    <td>{employee.employee_last_name}</td>
                                    <td>{employee.employee_email}</td>
                                    <td>{employee.employee_phone}</td>
                                    <td>{format(new Date(employee.added_date), 'MM-dd_yyyy')}</td>
                                    <td>{employee.employee_role}</td>
                                    <td>
                                        <div className="edit-delate-icons">edit | delate</div>
                                    </td>
                           </tr> ))}  
                        </tbody>

                    </Table>
                </div>
            </section>
        )}
        </>
         
     )
}

export default EmployeeList;