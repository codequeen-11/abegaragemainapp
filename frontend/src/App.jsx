import { useState } from 'react'
 import { Routes, Route } from 'react-router'
// import './App.css'
import  "./assets/template-assets/css/bootstrap.css"
import  "./assets/template-assets/css/style.css"
import  "./assets/template-assets/css/responsive.css"
import  "./assets/template-assets/css/color.css";

// import the page components
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import AddEmployee from './Pages/Admin/AddEmployee'
import UnAuthorized from './Pages/UnAuthorized'
import Login from './Pages/Login'
import Orders from './Pages/Admin/Orders'
import Customers from './Pages/Admin/Customers'
import Employees from './Pages/Admin/Employees'
import PrivateAuthRoute from './Components/Auth/PrivateAuthRoute'
 
function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/unauthorized' element={<UnAuthorized />} />
      
        <Route
          path="/admin/order"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />

        
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />


       <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
      <Route path='/admin/employees' element= {<Employees/>}></Route>
      
    </Routes>
       <Footer/>
    </>
  )
}

export default App
