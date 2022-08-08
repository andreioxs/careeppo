import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";

function CompanyLogin() {

  return (
    <div className="CompanyLogin">
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
              <Link to="/companyoverview">
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
export default CompanyLogin;