import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./AdminEmployees.css";
import AdminNavigation from "./AdminNavigation";

const AdminEmployees = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const [employeeSearch, setEmployeeSearch] = useState("");

  const empsearch = (event) => {
    setEmployeeSearch(event.target.value);
    if (event.target.value == "") {
      axios.get("http://localhost:8085/employees").then((response) => {
        setEmployeeData(response.data);
      });
    }
  };

  const employeeClick = () => {
    let newEmployeeData = employeeData.filter((e) => {
      return (
        e.employeeName.substring(0, employeeSearch.length).toLowerCase() ==
        employeeSearch.toLowerCase()
      );
    });
    setEmployeeData(newEmployeeData);
  };

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
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
              placeholder="Employee name"
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
                  Employee Details{" "}
                </Card.Header>
                <Card.Body>
                  <Card.Title>Employee Name: </Card.Title>
                  <Card.Text>{ele.employeeName} </Card.Text>

                  <Card.Title>Employee ID: </Card.Title>
                  <Card.Text>{ele.employeeId} </Card.Text>

                  <Card.Title>Employee Designation: </Card.Title>
                  <Card.Text>{ele.designation} </Card.Text>

                  <Card.Title>Employee Email: </Card.Title>
                  <Card.Text>{ele.emailId} </Card.Text>

                  <Card.Title>Employee MobileNo: </Card.Title>
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

export default AdminEmployees;
