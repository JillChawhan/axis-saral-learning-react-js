import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomeNavigation/Home";
import EmployeeLogin from "./components/Logins/EmployeeLogin/EmployeeLogin";
import ManagerLogin from "./components/Logins/ManagerLogin/ManagerLogin";
import AdminLogin from "./components/Logins/AdminLogin/AdminLogin";
import EmployeeNavigation from "./components/All-Modules/Employee Module/EmployeeNavigation";
import Project from "./components/All-Modules/Employee Module/Project";
import ProjectDetails from "./components/All-Modules/Employee Module/ProjectDetails";
import Manager from "./components/All-Modules/Employee Module/Manager";
import MyProfile from "./components/All-Modules/Employee Module/MyProfile";
import Opportunity from "./components/All-Modules/Employee Module/Opportunity";
import ManagerNavigation from "./components/All-Modules/Manager Module/ManagerNavigation";
import ManagerProjects from "./components/All-Modules/Manager Module/ManagerProjects";
import ManagerProjectDetails from "./components/All-Modules/Manager Module/ManagerProjectDetails";
import ManagerEmployees from "./components/All-Modules/Manager Module/ManagerEmployees";
import ManagerMyProfile from "./components/All-Modules/Manager Module/MyProfile";
import AdminNavigation from "./components/All-Modules/Admin Module/AdminNavigation";
import AdminProject from "./components/All-Modules/Admin Module/AdminProject";
import AdminProjectDetails from "./components/All-Modules/Admin Module/AdminProjectDetails";
import AdminEmployees from "./components/All-Modules/Admin Module/AdminEmployees";
import AdminManagers from "./components/All-Modules/Admin Module/AdminManagers";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
          Home Page
        </Route>
        <Route path="/employee-login" element={<EmployeeLogin />}></Route>
        <Route path="/manager-login" element={<ManagerLogin />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route path="/employee-module" element={<EmployeeNavigation />}></Route>
        <Route path="/employee-project" element={<Project />}></Route>
        <Route path="/project-details" element={<ProjectDetails />}></Route>
        <Route path="/manager-details" element={<Manager />}></Route>
        <Route path="/myprofile-details" element={<MyProfile />}></Route>
        <Route path="/opportunities" element={<Opportunity />}></Route>
        <Route path="/manager-module" element={<ManagerNavigation />}></Route>
        <Route path="/manager-project" element={<ManagerProjects />}></Route>
        <Route
          path="/manager-project-details"
          element={<ManagerProjectDetails />}
        ></Route>
        <Route path="/manager-employees" element={<ManagerEmployees />}></Route>
        <Route path="/manager-profile" element={<ManagerMyProfile />}></Route>
        <Route path="/admin-module" element={<AdminNavigation />}></Route>
        <Route path="/admin-project" element={<AdminProject />}></Route>
        <Route
          path="/admin-project-details"
          element={<AdminProjectDetails />}
        ></Route>
        <Route path="/admin-employees" element={<AdminEmployees />}></Route>
        <Route path="/admin-managers" element={<AdminManagers />}></Route>
      </Routes>
    </>
  );
};

export default App;
