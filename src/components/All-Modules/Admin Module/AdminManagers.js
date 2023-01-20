import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./AdminManagers.css";
import AdminNavigation from "./AdminNavigation";

const AdminManagers = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const [employeeSearch, setEmployeeSearch] = useState("");

  const empsearch = (event) => {
    setEmployeeSearch(event.target.value);
    if (event.target.value == "") {
      axios.get("http://localhost:8085/managers").then((response) => {
        setEmployeeData(response.data);
      });
    }
  };

  const employeeClick = () => {
    let newEmployeeData = employeeData.filter((e) => {
      return (
        e.managerName.substring(0, employeeSearch.length).toLowerCase() ==
        employeeSearch.toLowerCase()
      );
    });
    setEmployeeData(newEmployeeData);
  };

  useEffect(() => {
    axios.get("http://localhost:8085/managers").then((response) => {
      setEmployeeData(response.data);
    });
  }, []);

  return (
    <>
      <AdminNavigation />
      <div className="employeesearch">
        <div className="input-group">
          <div className="employeeinput">
            <input
              type="search"
              className="form-control"
              placeholder="Manager name"
              onChange={empsearch}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary employeebtn"
            onClick={employeeClick}
          >
            <i className="fas fa-search"> Search </i>
          </button>
        </div>
      </div>
      {employeeData.map((ele) => {
        return (
          <>
            <div className="manager-card">
              <Card>
                <Card.Header className="managercard">
                  {" "}
                  Manager Details{" "}
                </Card.Header>
                <Card.Body>
                  <Card.Title>Manager Name: </Card.Title>
                  <Card.Text>{ele.managerName} </Card.Text>

                  <Card.Title>Manager ID: </Card.Title>
                  <Card.Text>{ele.managerId} </Card.Text>

                  <Card.Title>Manager Designation: </Card.Title>
                  <Card.Text>{ele.designation} </Card.Text>

                  <Card.Title>Manager Email: </Card.Title>
                  <Card.Text>{ele.emailId} </Card.Text>

                  <Card.Title>Manager MobileNo: </Card.Title>
                  <Card.Text>{ele.mobileNo} </Card.Text>
                  <hr />
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AdminManagers;
