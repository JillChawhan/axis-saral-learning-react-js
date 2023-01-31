import React, { useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTextArea,
} from "mdb-react-ui-kit";
import AdminNavigation from "../AdminNavigation";
import "./AdminNotification.css";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

function AdminNotification() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5npsadc",
        "template_l0n0t43",
        form.current,
        "l0lAaXXmiQKmO4qIn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <AdminNavigation />

      <form ref={form} onSubmit={sendEmail}>
        <label for="fname">Email</label>
        <input type="email" id="fname" name="user_email" placeholder="email" />

        <label for="fname">Subject</label>
        <input type="text" id="fname" name="subject" placeholder="Subject" />

        <label for="lname">message</label>
        <input type="text" id="lname" name="message" placeholder="message" />

        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default AdminNotification;
