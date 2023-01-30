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
import MyDocuments from "./components/All-Modules/Employee Module/MyDocuments";
import SalarySlip from "./components/All-Modules/Employee Module/SalarySlip";
import EmployeeSearch from "./components/All-Modules/Employee Module/Employee-Search";
import PrivateRouteAxis from "./components/Logins/EmployeeLogin/PrivateRouteAxis";
import PrivateRouteManager from "./components/Logins/ManagerLogin/PrivateRouteManager";
import PrivateAdmin from "./components/Logins/AdminLogin/PrivateAdmin";
import AdminNewsFeed from "./components/All-Modules/Admin Module/Admin-News-Feed/AdminNewsFeed";

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
        <Route
          path="/employee-module"
          element={<PrivateRouteAxis children={<EmployeeNavigation />} />}
        ></Route>
        <Route
          path="/employee-project"
          element={<PrivateRouteAxis children={<Project />} />}
        ></Route>
        <Route
          path="/project-details"
          element={<PrivateRouteAxis children={<ProjectDetails />} />}
        ></Route>
        <Route
          path="/employee-documents"
          element={<PrivateRouteAxis children={<MyDocuments />} />}
        ></Route>
        <Route
          path="/employee-salaryslip"
          element={<PrivateRouteAxis children={<SalarySlip />} />}
        ></Route>
        <Route
          path="/employee-search"
          element={<PrivateRouteAxis children={<EmployeeSearch />} />}
        ></Route>
        <Route
          path="/manager-details"
          element={<PrivateRouteAxis children={<Manager />} />}
        ></Route>
        <Route
          path="/myprofile-details"
          element={<PrivateRouteAxis children={<MyProfile />} />}
        ></Route>
        <Route
          path="/opportunities"
          element={<PrivateRouteAxis children={<Opportunity />} />}
        ></Route>
        <Route
          path="/manager-module"
          element={<PrivateRouteManager children={<ManagerNavigation />} />}
        ></Route>
        <Route
          path="/manager-project"
          element={<PrivateRouteManager children={<ManagerProjects />} />}
        ></Route>
        <Route
          path="/manager-project-details"
          element={<PrivateRouteManager children={<ManagerProjectDetails />} />}
        ></Route>
        <Route
          path="/manager-employees"
          element={<PrivateRouteManager children={<ManagerEmployees />} />}
        ></Route>
        <Route
          path="/manager-profile"
          element={<PrivateRouteManager children={<ManagerMyProfile />} />}
        ></Route>
        <Route
          path="/admin-module"
          element={<PrivateAdmin children={<AdminNavigation />} />}
        ></Route>
        <Route
          path="/admin-project"
          element={<PrivateAdmin children={<AdminProject />} />}
        ></Route>
        <Route
          path="/admin-project-details"
          element={<PrivateAdmin children={<AdminProjectDetails />} />}
        ></Route>
        <Route
          path="/admin-employees"
          element={<PrivateAdmin children={<AdminEmployees />} />}
        ></Route>
        <Route
          path="/admin-managers"
          element={<PrivateAdmin children={<AdminManagers />} />}
        ></Route>
        <Route
          path="/admin-news-feed"
          element={<PrivateAdmin children={<AdminNewsFeed />} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
