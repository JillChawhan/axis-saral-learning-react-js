import React, { useEffect, useState } from "react";
import ProjectNavigation from "./ProjectNavigation";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Opportunity.css";

const Opportunity = () => {
  const [opportunity, setOpportunity] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/opportunities").then((response) => {
      setOpportunity(response.data);
    });
  }, []);

  return (
    <>
      <ProjectNavigation />
      {opportunity.map((ele) => {
        return (
          <>
            <div className="opp-card">
              <Card>
                <Card.Header className="oppcard"> Opportunities </Card.Header>
                <Card.Body>
                  <Card.Title>Project ID: </Card.Title>
                  <Card.Text>{ele.projectId}</Card.Text>

                  <Card.Title>Project Designation: </Card.Title>
                  <Card.Text>{ele.projectDesignation}</Card.Text>

                  <Card.Title>Project Domain: </Card.Title>
                  <Card.Text>{ele.projectDomain}</Card.Text>

                  <Card.Title>Project Duration: </Card.Title>
                  <Card.Text>{ele.projectDuration}</Card.Text>

                  <Card.Title>Manager ID: </Card.Title>
                  <Card.Text>{ele.projectManagerId}</Card.Text>

                  <Card.Title>Salary: </Card.Title>
                  <Card.Text>{ele.salary}</Card.Text>

                  <Card.Title>Project Location: </Card.Title>
                  <Card.Text>{ele.location}</Card.Text>

                  <Card.Title>Opportunity Description: </Card.Title>
                  <Card.Text>{ele.description}</Card.Text>
                </Card.Body>
              </Card>
              <hr />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Opportunity;
