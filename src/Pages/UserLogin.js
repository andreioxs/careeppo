import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import UserOverview from "./UserOverview"
import UserRegister from "./UserRegister";
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

function UserLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password, 'user')
    // await login(email, password, 'company')
  }

  return (
    <div className="UserLogin">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 rounded-4 p-4 justify-content-center" style={{ backgroundColor: '#fffffff2' }}>
            <h3>Sign In</h3>
            <form id="loginform" onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

              </div>
              <div className="form-group my-3">
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
                <button disabled={isLoading}>Log in</button>
              {error && <div className="error">{error}</div>}
            </form><br></br>
            <Link to="/userregister">No Account? Sign up here. </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserLogin;