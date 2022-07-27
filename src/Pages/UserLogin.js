import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from "./UserProfile"
import UserRegister from "./UserRegister";

function UserLogin() {
  return (
    <div>
      <Link to="/userprofile">User Profile</Link><br></br>
      <Link to="/userregister">User Registration</Link>
    </div>
  )
}

export default UserLogin