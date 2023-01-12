import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/HomeNavigation/Home';
import EmployeeLogin from './components/Logins/EmployeeLogin/EmployeeLogin';
import ManagerLogin from './components/Logins/ManagerLogin/ManagerLogin'
import AdminLogin from './components/Logins/AdminLogin/AdminLogin'
import EmployeeNavigation from './components/All-Modules/Employee Module/EmployeeNavigation'
import EmployeeModule from './components/All-Modules/Employee Module/EmployeeModule';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}> Home Page</Route>
        <Route path="/employee-login" element={<EmployeeLogin />}></Route>
        <Route path="/manager-login" element={<ManagerLogin/>}></Route>
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/employee-module" element={<EmployeeModule/>}></Route>
      </Routes>
      
    </>
  )
}

export default App;

