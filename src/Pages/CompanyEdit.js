import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import CompanyProfile from "./CompanyProfile";

function UserProfile() {
  return (
    <div>
      <Link to="/companyprofile">Back to Company Profile</Link><br></br>
      <Link to="/companyoverview">Company Overview</Link>
    </div>
  )
}

export default UserProfile