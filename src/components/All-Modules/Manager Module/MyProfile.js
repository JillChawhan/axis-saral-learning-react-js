import React, { useEffect, useState } from 'react'
import ManagerProjectNav from './ManagerProjectNav'
import axios from 'axios'
import Card from "react-bootstrap/Card";

const MyProfile = () => {

    // const [managerData, setManagerData] = useState([])

    let managerLoginData1 = localStorage.getItem("managerLogin")
    let managerLoginData2 = JSON.parse(managerLoginData1)
    // console.log(managerLoginData2)
 
    // useEffect(() => {
    //     axios.get("http://localhost:8085/managers").then((response) => {
    //         setManagerData(response.data)
    //     })
    // }, [])
 
  return (
    <>
    <ManagerProjectNav />
    {
       
                  <div className="manager-card">
                    <Card>
                      <Card.Header className="managercard">
                        My Profile
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>Manager Name: </Card.Title>
                        <Card.Text>{managerLoginData2.managerName} </Card.Text>
      
                        <Card.Title>Manager ID: </Card.Title>
                        <Card.Text>{managerLoginData2.managerId} </Card.Text>
      
                        <Card.Title>Manager Designation: </Card.Title>
                        <Card.Text>{managerLoginData2.designation} </Card.Text>
      
                        <Card.Title>Manager Email: </Card.Title>
                        <Card.Text>{managerLoginData2.emailId} </Card.Text>
      
                        <Card.Title>Manager MobileNo: </Card.Title>
                        <Card.Text>{managerLoginData2.mobileNo} </Card.Text>
                        <hr />
                      </Card.Body>
                    </Card>
                  </div>
            
    }
    </>
  )
}

export default MyProfile
