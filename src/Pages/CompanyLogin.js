import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";

// function CompanyLogin() {
//   return (
//     <div>
//       <Link to="/companyprofile">Company Profile</Link><br></br>
//       <Link to="/companyoverview">Company Overview</Link>
//     </div>
//   )
// }

// export default CompanyLogin

// function App() {
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [passwordError, setpasswordError] = useState("");
//   const [emailError, setemailError] = useState("");

//   const handleValidation = (event) => {
//     let formIsValid = true;

//     if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
//       formIsValid = false;
//       setemailError("Email Not Valid");
//       return false;
//     } else {
//       setemailError("");
//       formIsValid = true;
//     }

//     if (!password.match(/^[a-zA-Z]{8,22}$/)) {
//       formIsValid = false;
//       setpasswordError(
//         "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
//       );
//       return false;
//     } else {
//       setpasswordError("");
//       formIsValid = true;
//     }

//     return formIsValid;
//   };

//   const loginSubmit = (e) => {
//     e.preventDefault();
//     handleValidation();
//   };

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 rounded-4 p-4 justify-content-center" style={{ backgroundColor: '#fffffff2' }}>
            <h3>Sign In</h3>
            <form id="loginform" >
              <div className="form-group my-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />

              </div>
              <div className="form-group my-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />

              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Save me</label>
              </div>
              <Link to="/useroverview">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Link>
            </form><br></br>
            <Link to="/userregister">No Account? Sign up here. </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
export default App;