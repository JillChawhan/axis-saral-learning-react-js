import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ProjectNavigation from './ProjectNavigation'


const MyProfile = () => {

    const [myProfile, setMyProfile] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8085/employees").then((response) => {
            setMyProfile(response.data)
        })
    }, [])

    let empDetails = localStorage.getItem("LoginData")
    let empData = JSON.parse(empDetails)

  return (
    <>
    <ProjectNavigation />
    {
        myProfile.map((ele) => {
            if(ele.emailId == empData.emailId) {
                console.log("Same Employee")
            return(
                <>
                <div className='manager-card'>
                <Card>
                        <Card.Header className='managercard'> Employee Details </Card.Header>
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
                          
                        </Card.Body>
                </Card>
                </div> 
                </>
            )
            }
        })
    
    }
    
    </>
  
  )
}

export default MyProfile
