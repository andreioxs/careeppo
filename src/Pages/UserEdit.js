import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from "./UserProfile";

function UserEdit() {
  return (
    <div>
      <Link to="/userprofile">User Profile</Link><br></br>
      UserEdit
    </div>
  )
}

export default UserEdit