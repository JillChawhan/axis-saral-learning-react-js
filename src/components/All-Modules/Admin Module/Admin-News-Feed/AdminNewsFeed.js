import React, { useEffect, useState } from "react";
import AdminNavigation from "../AdminNavigation";
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
import "./AdminNewsFeed.css";

const AdminNewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [commentInput, setCommentInput] = useState();

  const setCommentData = (e) => {
    setCommentInput(e.target.value);
  };

  const addComment = (ele) => {
    let data = {
      message: commentInput,
    };
    axios
      .post(`http://localhost:8088/news/${ele.newsFeedId}/comment/add`)
      .then((response) => response)
      .then(data);
  };

  useEffect(() => {
    axios.get("http://localhost:8088/news").then((response) => {
      setNewsData(response.data);
    });
  }, []);

  return (
    <>
      <AdminNavigation />
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
                            onChange={(e) => setCommentData}
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
                          }}
                        >
                          Add Comment
                        </Button>
                      </MDBCardBody>
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

export default AdminNewsFeed;
