import React, { useEffect, useState } from "react";
import ManagerProjectNav from "./ManagerProjectNav";
import axios from "axios";
import Card from "react-bootstrap/Card";

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

const MyProfile = () => {
  // const [managerData, setManagerData] = useState([])

  let managerLoginData1 = localStorage.getItem("managerLogin");
  let managerLoginData2 = JSON.parse(managerLoginData1);
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
        <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
          <MDBContainer className="py-4 h-800">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="6" className="mb-4 mb-lg-0">
                <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                  <MDBRow className="g-0">
                    <MDBCol
                      md="4"
                      className="gradient-custom text-center text-white"
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                      }}
                    >
                      <MDBCardImage
                        src={managerLoginData2.profile}
                        alt="Avatar"
                        className="my-5"
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "5px",
                        }}
                        fluid
                      />
                      <MDBTypography tag="h5" style={{ color: "black" }}>
                        {managerLoginData2.managerName}
                      </MDBTypography>
                      <MDBCardText style={{ color: "black" }}>
                        {managerLoginData2.designation}
                      </MDBCardText>
                      <MDBIcon far icon="edit mb-5" />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody className="p-4">
                        <MDBTypography tag="h6">Manager Details</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Manager Id</MDBTypography>
                            <MDBCardText className="text-muted"></MDBCardText>
                            {managerLoginData2.managerId}
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6"></MDBTypography>
                            <MDBCardText className="text-muted"></MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <MDBTypography tag="h6">Contact Details</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Email</MDBTypography>
                            <MDBCardText className="text-muted">
                              {managerLoginData2.emailId}
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">
                              Mobile Number
                            </MDBTypography>
                            <MDBCardText className="text-muted">
                              {managerLoginData2.mobileNo}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <div className="d-flex justify-content-start">
                          <a href="#!">
                            <MDBIcon fab icon="facebook me-3" size="lg" />
                          </a>
                          <a href="#!">
                            <MDBIcon fab icon="twitter me-3" size="lg" />
                          </a>
                          <a href="#!">
                            <MDBIcon fab icon="instagram me-3" size="lg" />
                          </a>
                        </div>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      }
    </>
  );
};

export default MyProfile;
