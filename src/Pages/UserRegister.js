import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

  const UserRegister = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup('')

    const handleSubmit = async (e) => {
      e.preventDefault()

      await signup(email, password, 'user')
    }

    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <form className="col-xl-8 rounded-4 p-4 justify-content-evenly" style={{ backgroundColor: '#fffffff2' }} onSubmit={handleSubmit}>
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="d-grid my-2">
            <button disabled={isLoading}>Sign up</button>
              {error && <div className="error">{error}</div>}
            </div>
            <p className="fs-6">Already registered <Link to="/userlogin">Sign in?</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }



export default UserRegister