import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/HomeNavigation/Home';
import EmployeeLogin from './components/Logins/EmployeeLogin/EmployeeLogin';
import ManagerLogin from './components/Logins/ManagerLogin/ManagerLogin'
import AdminLogin from './components/Logins/AdminLogin/AdminLogin'
import EmployeeNavigation from './components/All-Modules/Employee Module/EmployeeNavigation'
import Project from './components/All-Modules/Employee Module/Project';
import ProjectDetails from './components/All-Modules/Employee Module/ProjectDetails';
import Manager from './components/All-Modules/Employee Module/Manager';
import MyProfile from './components/All-Modules/Employee Module/MyProfile';
import Opportunity from './components/All-Modules/Employee Module/Opportunity';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}> Home Page</Route>
        <Route path="/employee-login" element={<EmployeeLogin />}></Route>
        <Route path="/manager-login" element={<ManagerLogin/>}></Route>
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/employee-module" element={<EmployeeNavigation/>}></Route>
        <Route path="/employee-project" element={<Project />}></Route>
        <Route path="/project-details" element={<ProjectDetails />}></Route>
        <Route path="/manager-details" element={<Manager />}></Route>
        <Route path="/myprofile-details" element={<MyProfile/>}></Route>
        <Route path="/opportunities" element={<Opportunity />}></Route>
      </Routes>
      
    </>
  )
}

export default App;

