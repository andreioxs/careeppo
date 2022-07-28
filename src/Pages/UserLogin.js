import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import UserOverview from "./UserOverview"
import UserRegister from "./UserRegister";

// function UserLogin() {
//   return (
//     <Container>
//       <div>
//         <Link to="/userprofile">User Profile</Link><br></br>
//         <Link to="/userregister">User Registration</Link>
        
//       </div>
//     </Container>
//   )
// }


function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 rounded-lg justify-content-center" style={{backgroundColor:'#fffffff2'}}>
          <h3>Sign In</h3>
            <form id="loginform" >
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="text-danger form-text">
                </small>
              </div>
              <div className="form-group">
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


// export default UserLogin