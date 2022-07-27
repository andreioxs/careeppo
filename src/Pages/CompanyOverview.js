import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyProfile from "./CompanyProfile";
import CompanyEvaluation from "./CompanyEvaluation";

function UserProfile() {
  return (
    <div>
      <Link to="/companyprofile">Company Profile</Link><br></br>
      <Link to="/companyevaluation">Job Overview & Evaluation</Link>
    </div>
  )
}

export default UserProfile