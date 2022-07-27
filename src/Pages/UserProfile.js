import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import UserEdit from "./UserEdit";

function UserProfile() {
  return (
    <div>
      <Link to="/useredit">Edit User Profile</Link><br></br>
      <Link to="/useroverview">User Overview</Link>
    </div>
  )
}

export default UserProfile