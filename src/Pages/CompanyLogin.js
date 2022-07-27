import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function CompanyLogin() {
  return (
    <div>
      <Link to="/companyprofile">Company Profile</Link><br></br>
      <Link to="/companyoverview">Company Overview</Link>
    </div>
  )
}

export default CompanyLogin