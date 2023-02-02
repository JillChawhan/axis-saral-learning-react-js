import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ProjectNavigation from "./ProjectNavigation";
import "./MyProfile.css";
import Button from "@mui/material/Button";
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
  const [myProfile, setMyProfile] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setMyProfile(response.data);
    });
  }, []);

  let empDetails = localStorage.getItem("LoginData");
  let empData = JSON.parse(empDetails);

  return (
    <>
      <ProjectNavigation />
      {myProfile.map((ele) => {
        if (ele.emailId == empData.emailId) {
          // console.log("Same Employee");
          return (
            <>
              <section
                className="vh-100"
                style={{ backgroundColor: "#f4f5f7" }}
              >
                <MDBContainer className="py-4 h-800">
                  <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                      <MDBCard
                        className="mb-3"
                        style={{ borderRadius: ".5rem" }}
                      >
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
                              src={ele.profile}
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
                              {ele.employeeName}
                            </MDBTypography>
                            <MDBCardText style={{ color: "black" }}>
                              {ele.designation}
                            </MDBCardText>
                            <MDBIcon far icon="edit mb-5" />
                          </MDBCol>
                          <MDBCol md="8">
                            <MDBCardBody className="p-4">
                              <MDBTypography tag="h6">
                                Employee Details
                              </MDBTypography>
                              <hr className="mt-0 mb-4" />
                              <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">
                                    Employee Id
                                  </MDBTypography>
                                  <MDBCardText className="text-muted"></MDBCardText>
                                  {ele.employeeId}
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6"></MDBTypography>
                                  <MDBCardText className="text-muted"></MDBCardText>
                                </MDBCol>
                              </MDBRow>

                              <MDBTypography tag="h6">
                                Contact Details
                              </MDBTypography>
                              <hr className="mt-0 mb-4" />
                              <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">Email</MDBTypography>
                                  <MDBCardText className="text-muted">
                                    {ele.emailId}
                                  </MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">
                                    Mobile Number
                                  </MDBTypography>
                                  <MDBCardText className="text-muted">
                                    {ele.mobileNo}
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
                                  <MDBIcon
                                    fab
                                    icon="instagram me-3"
                                    size="lg"
                                  />
                                </a>
                              </div>
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    id="btnlogin"
                    style={{ backgroundColor: "#AE275F" }}
                  >
                    Change Password
                  </Button>
                </MDBContainer>
              </section>
            </>
          );
        }
      })}
    </>
  );
};

export default MyProfile;
