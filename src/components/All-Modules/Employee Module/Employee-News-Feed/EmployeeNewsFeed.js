import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import ProjectNavigation from "../ProjectNavigation";
import "./EmployeeNewsFeed.css";

const EmployeeNewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [sh, setsh] = useState(false);
  const [shows, setshows] = useState("Comments");
  const setCommentData = (e) => {
    setCommentInput(e.target.value);
  };

  let newsEmpData1 = localStorage.getItem("LoginData");
  let newsEmpData2 = JSON.parse(newsEmpData1);
  console.log(newsEmpData2);
  const show1 = () => {
    setsh(sh == false ? true : false);
    setshows(shows == "Comments" ? "Close Comments" : "Comments");
  };
  const addComment = (ele) => {
    console.log(ele);
    let data = {
      message: commentInput,
      name: newsEmpData2.employeeName,
    };
    axios
      .post(`http://localhost:8088/news/${ele.newsFeedId}/comment/add`, data)
      .then((response) => response);

    document.getElementById("form1").value = "";
    axios.get("http://localhost:8088/news").then((response) => {
      setNewsData(response.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8088/news").then((response) => {
      setNewsData(response.data);
    });
  }, []);

  return (
    <>
      <ProjectNavigation />
      <div className="headingNews">
        <h1> News Feed </h1>
      </div>
      <div className="adminnews">
        {newsData.map((ele) => {
          return (
            <>
              <MDBContainer fluid className="my-5">
                <MDBRow className="justify-content-center">
                  <MDBCol md="8" lg="6" xl="4">
                    <MDBCard style={{ borderRadius: "15px" }}>
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-overlay"
                      >
                        <MDBCardImage
                          src={ele.newsImageUrl}
                          fluid
                          className="w-100"
                          style={{
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                          }}
                        />
                      </MDBRipple>
                      <hr class="my-0" />
                      <MDBCardBody className="pb-0">
                        <div className="d-flex justify-content-between">
                          <p>
                            <p className="text-dark">DESCRIPTION</p>
                          </p>
                        </div>
                        <p className="text-dark">{ele.newsDescription}</p>
                      </MDBCardBody>
                      <hr class="my-0" />
                      <MDBCardBody className="pb-0">
                        <div class="md-form">
                          <input
                            type="text"
                            id="form1"
                            class="form-control"
                            placeholder="Add Comment Here..."
                            onChange={setCommentData}
                          />
                        </div>
                      </MDBCardBody>
                      <MDBCardBody className="pb-0">
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          id="btnlogin"
                          style={{ backgroundColor: "#AE275F" }}
                          onClick={() => {
                            addComment(ele);
                            alert(
                              "Comment is Added Successfully.",
                              window.location.reload()
                            );
                          }}
                        >
                          Add Comment
                        </Button>
                      </MDBCardBody>
                      <p onClick={show1}>{shows}</p>
                      <div style={{ display: sh ? "block" : "none" }}>
                        {ele.comments?.map((ele1) => {
                          console.log(ele1);
                          return (
                            <>
                              <div className="d-flex mb-3">
                                <a>
                                  <img
                                    src="https://storage.needpix.com/thumbs/blank-profile-picture-973460_1280.png"
                                    className="border rounded-circle me-2"
                                    alt="Avatar"
                                    style={{ height: "40px" }}
                                  />
                                </a>
                                <div>
                                  <div className="bg-light rounded-3 px-3 py-1">
                                    <a className="text-dark mb-0">
                                      <strong>{ele1.name}</strong>
                                    </a>
                                    <a className="text-muted d-block">
                                      <small>{ele1.message}</small>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </>
          );
        })}
      </div>
    </>
  );
};

export default EmployeeNewsFeed;
