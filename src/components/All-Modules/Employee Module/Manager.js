import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectNavigation from "./ProjectNavigation";
import Card from "react-bootstrap/Card";
import "./Manager.css";

const Manager = () => {
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
      <ProjectNavigation />
      {manager.map((ele) => {
        if (ele.emailId == empData.emailId) {
          console.log("Same Employee");
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
                    <Card.Text>{ele.manager.managerName} </Card.Text>

                    <Card.Title>Manager ID: </Card.Title>
                    <Card.Text>{ele.manager.managerId} </Card.Text>

                    <Card.Title>Manager Designation: </Card.Title>
                    <Card.Text>{ele.manager.designation} </Card.Text>

                    <Card.Title>Manager Email: </Card.Title>
                    <Card.Text>{ele.manager.emailId} </Card.Text>

                    <Card.Title>Manager MobileNo: </Card.Title>
                    <Card.Text>{ele.manager.mobileNo} </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Manager;
