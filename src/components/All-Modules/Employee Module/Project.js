import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ProjectNavigation from './ProjectNavigation';
import "./Project.css"
import { useEffect, useState } from 'react';
import axios from 'axios';


function Project() {

    const [projectData, setProjectData] = useState([])
    const [projectDetailsChange, setprojectDetailsChange] = useState(false)
    const [managerDetailsChange, setmanagerDetailsChange] = useState(false)
    const [employeeDetailsChange, setemployeeDetailsChange] = useState(false)
    const [supportTeamDetails, setsupportTeamDetails] = useState(false)
    const [stakeHolderDetailsChange, setstakeHolderDetailsChange] = useState(false)

    const projectDetails = () => {
        setprojectDetailsChange(true)
        setmanagerDetailsChange(false)
        setemployeeDetailsChange(false)
        setstakeHolderDetailsChange(false)
        setsupportTeamDetails(false)
    }

    const managerDetails = () => {
        setprojectDetailsChange(false)
        setmanagerDetailsChange(true)
        setemployeeDetailsChange(false)
        setstakeHolderDetailsChange(false)
        setsupportTeamDetails(false)
    }

    const employeeDetails = () => {
        setprojectDetailsChange(false)
        setmanagerDetailsChange(false)
        setemployeeDetailsChange(true)
        setstakeHolderDetailsChange(false)
        setsupportTeamDetails(false)
    }

    const stakeDetails = () => {
        setprojectDetailsChange(false)
        setmanagerDetailsChange(false)
        setemployeeDetailsChange(false)
        setstakeHolderDetailsChange(true)
        setsupportTeamDetails(false)
    }

    const supportteamDetails = () => {
        setsupportTeamDetails(true)
        setprojectDetailsChange(false)
        setmanagerDetailsChange(false)
        setemployeeDetailsChange(false)
        setstakeHolderDetailsChange(false)
    }

    useEffect(() => {
        axios.get("http://localhost:8085/projects").then((response) => {
            setProjectData(response.data)
        })
    }, [])

  return (
    <>
    <ProjectNavigation />
   { projectData.map((ele) => {
        return(
          <>
          <Card>
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link className='projectclass' onClick={projectDetails}>PROJECT DETAILS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='projectclass' onClick={managerDetails}>MANAGER DETAILS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='projectclass' onClick={employeeDetails}> EMPLOYEE DETAILS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='projectclass' onClick={supportteamDetails}>SUPPORT TEAM</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='projectclass' onClick={stakeDetails}>STAKEHOLDER DETAILS</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body style={{display:  projectDetailsChange ? "block" : "none" }}>
            <Card.Title>Project Name: {ele.projectName}</Card.Title>
            <Card.Text>
              Project Id : {ele.projectId}
            </Card.Text>
            <Card.Text>
              Project Details : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
          </Card.Body>
           

          <Card.Body style={{display:  managerDetailsChange ? "block" : "none" }}>
          <Card.Title> Manager Name: {ele.managerId}</Card.Title>
          <Card.Text>
            Manager Id : {ele.projectId}
          </Card.Text>
          </Card.Body>

          <Card.Body style={{display:  employeeDetailsChange ? "block" : "none" }}>
          <Card.Title> Manager Name: {ele.managerId}</Card.Title>
          <Card.Text>
            Manager Id : {ele.projectId}
          </Card.Text>
          </Card.Body>
       
          {
            ele.supportTeamList.map((ele) => {
                return(
                    <>
                    <Card.Body style={{display:  supportTeamDetails ? "block" : "none" }}>
                    <Card.Title> Employee Name: {ele.employeeName}</Card.Title>
                    <Card.Text>
                      Employee Id : {ele.employeeId}
                    </Card.Text>
                    <Card.Text>
                      Email Id : {ele.emailId}
                    </Card.Text>
                    <Card.Text>
                      Mobile Number : {ele.mobileNo}
                    </Card.Text>
                    <Card.Text>
                      Employee Designation : {ele.designation}
                    </Card.Text>
                    </Card.Body> 
                    </>
                )
            })
          }


          {
            ele.stakeholder.map((ele) => {
                return(
                    <>
                    <Card.Body style={{display:  stakeHolderDetailsChange ? "block" : "none" }}>
                    <Card.Title> Stakeholder Name: {ele.stakeholderName}</Card.Title>
                    <Card.Text>
                      Stakeholder Id : {ele.stakeholderId}
                    </Card.Text>
                    <Card.Text>
                      Email Id : {ele.stakeholderEmail}
                    </Card.Text>
                    <Card.Text>
                      Mobile Number : {ele.stakeholderMobileNo}
                    </Card.Text>
                    <Card.Text>
                      Stakeholder Position : {ele.stakeholderPosition}
                    </Card.Text>
                    </Card.Body> 
                    </>
                )
            })
          }
          

        </Card>
          </>  
        )
    })}
    
    </>
  );
}

export default Project;

