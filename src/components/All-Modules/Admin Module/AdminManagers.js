import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./AdminManagers.css";
import AdminNavigation from "./AdminNavigation";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

const AdminManagers = () => {
  const [manager, setManager] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setManager(response.data);
    });
  }, []);

  let empDetails = localStorage.getItem("LoginData");
  let empData = JSON.parse(empDetails);

  //    console.log(empData)

  return (
    <>
      <AdminNavigation />
    </>
  );
};

export default AdminManagers;
