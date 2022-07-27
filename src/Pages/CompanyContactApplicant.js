import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import CompanyEvaluation from "./CompanyEvaluation";


function CompanyReviewApplicant() {
  return (
    <div>
      <Link to="/companyoverview">Back to Company Overview</Link><br></br>
      <Link to="/companyevaluation">Job Overview & Evaluation</Link><br></br>
      
      Contact Form with a calendar
    </div>
  )
}

export default CompanyReviewApplicant