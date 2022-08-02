import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function UserRegister() {

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <form className="col-xl-8 rounded-4 p-4 justify-content-evenly" style={{ backgroundColor: '#fffffff2' }} >
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid my-2">
            <Link to="/useroverview">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
          <p className="fs-6">Already registered <Link to="/userlogin">Sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  )
}


export default UserRegister