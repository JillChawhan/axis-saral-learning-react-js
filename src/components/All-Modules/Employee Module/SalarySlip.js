import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useNavigate } from "react-router-dom";
import "./SalarySlip.css";


const SalarySlip = () => {
  const [salaryEmployeeData, setSalaryEmployeeData] = useState([]);
  const navigate = useNavigate();

  let salarySlip1 = localStorage.getItem("SalarySlip");
  let salarySlip2 = JSON.parse(salarySlip1);
  console.log(salarySlip2);

  useEffect(() => {
    axios.get("http://localhost:8087/salaryslip/employees").then((response) => {
      setSalaryEmployeeData(response.data);
    });
  }, []);

  const salarydownload = () => {
    window.print();
  };

  return (
    <>
      <Button
        type="submit"
        halfWidth
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        id="btnlogin"
        style={{ backgroundColor: "#AE275F" }}
        onClick={() => {
          navigate("/employee-documents");
        }}
      >
        <ArrowBackIosNewTwoToneIcon /> Back
      </Button>

      {
        // let found = salaryEmployeeData.find((element) => element.employeeId == salarySlip2.employeeId)
        salaryEmployeeData.map((ele) => {
          if (ele.employeeId == salarySlip2.employeeId) {
            return (
              <>
                <div className="centerSalarySlip">
                  <Card>
                    <Card.Header className="managercard">
                      Salary Slip
                    </Card.Header>
                    <Card.Header className="managercard">
                      {ele.employeeName}
                    </Card.Header>
                    <Card.Body>
                      <table>
                        <tr>
                          <td>Employee Id: {ele.employeeId}</td>
                        </tr>
                        <tr>
                          <td>Designation: {ele.designation}</td>
                        </tr>
                        <br />
                        <th>
                          <td> Standard Monthly Salary</td>
                        </th>
                        <tr>
                          <td> Basic Pay : {salarySlip2.basicPay}</td>
                        </tr>
                        <tr>
                          <td> Allowance: {salarySlip2.allowance}</td>
                        </tr>
                        <tr>
                          <td> Location Pay: {salarySlip2.locationPay}</td>
                        </tr>
                        <tr>
                          <td> Benefits Pay: {salarySlip2.benefitsPay}</td>
                        </tr>
                        <tr>
                          <td>PF Contribution: {salarySlip2.pfContribution}</td>
                        </tr>
                        <tr>
                          <td> Net Pay: {salarySlip2.salaryAmount}</td>
                        </tr>
                      </table>
                    </Card.Body>
                  </Card>

                  <Button
                    type="submit"
                    halfWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    id="btnlogin"
                    style={{ backgroundColor: "#AE275F" }}
                    onClick={salarydownload}
                  >
                    DOWNLOAD
                  </Button>
                </div>
              </>
            );
          }
        })
      }
    </>
  );
};

export default SalarySlip;
