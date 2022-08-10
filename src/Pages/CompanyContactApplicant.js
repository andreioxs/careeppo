import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import CompanyEvaluation from "./CompanyEvaluation";



function CompanyReviewApplicant() {
    // <div>
    //   <Link to="/companyoverview">Back to Company Overview</Link><br></br>
    //   <Link to="/companyevaluation">Job Overview & Evaluation</Link><br></br>
      
    //   Contact Form with a calendar
    // </div>

      const [password, setPassword] = useState("");
      const [email, setEmail] = useState("");
      const [passwordError, setpasswordError] = useState("");
      const [emailError, setemailError] = useState("");
    
      const handleValidation = (event) => {
        let formIsValid = true;
    
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
          formIsValid = false;
          setemailError("Email Not Valid");
          return false;
        } else {
          setemailError("");
          formIsValid = true;
        }
    
        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
          formIsValid = false;
          setpasswordError(
            "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
          );
          return false;
        } else {
          setpasswordError("");
          formIsValid = true;
        }
    
        return formIsValid;
      };
    
      const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
      };
    
      return (
        <div className="App">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 rounded-2 p-4 justify-content-center" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <h3>Contact Ash Ketchum</h3>
                <form id="loginform" onSubmit={loginSubmit}>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Join Team Rocket"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3" >
                    <input
                      type="text"
                      style={{height:'10rem'}}
                      className="form-control"
                    />
                  </div>
                  
                  <Link to="/companyoverview">
                    <button type="submit" className="btn btn-warning mt-3">
                    Submit
                    </button>
                  </Link>
                </form><br></br>
              </div>
            </div>
          </div>
        </div>
      );
    }
    export default CompanyReviewApplicant;