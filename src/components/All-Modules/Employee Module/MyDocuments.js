import React from "react";
import ProjectNavigation from "./ProjectNavigation";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./MyDocuments.css";
import { useNavigate } from "react-router-dom";

const MyDocuments = () => {
  const [salarySlip, setSalarySlip] = useState([]);
  const navigate = useNavigate();

  let salaryEmployee1 = localStorage.getItem("LoginData");
  let salaryEmployee2 = JSON.parse(salaryEmployee1);
  console.log(salaryEmployee2);

  const salarySubmit = (ele1) => {
    navigate("/employee-salaryslip");
    localStorage.setItem("SalarySlip", JSON.stringify(ele1));
  };

  useEffect(() => {
    axios.get("http://localhost:8087/salaryslips").then((response) => {
      setSalarySlip(response.data);
    });
  }, []);

  return (
    <>
      <ProjectNavigation />
      {salarySlip.map((ele) => {
        return (
          <>
            <div className="projectCard">
              <Card>
                <Card.Header className="cardHeader"> Salary Slips </Card.Header>
                <Card.Body>
                  <Card.Title>Employee Name:</Card.Title>
                  <Card.Text> {salaryEmployee2.employeeName} </Card.Text>
                  <Card.Title>Employee Id: </Card.Title>
                  <Card.Text> {ele.employeeId} </Card.Text>
                  <button
                    className="projectButton"
                    onClick={() => {
                      salarySubmit(ele);
                    }}
                  >
                    DOWNLOAD
                  </button>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MyDocuments;
