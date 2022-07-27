import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import CompanyEvaluation from "./CompanyEvaluation";
import CompanyContactApplicant from './CompanyContactApplicant';

function CompanyReviewApplicant() {
  return (
    <div>
      <Link to="/companyoverview">Back to Company Overview</Link><br></br>
      <Link to="/companycontactapplicant">Shedule a meeting</Link><br></br>
      Review Applicant
    </div>
  )
}

export default CompanyReviewApplicant