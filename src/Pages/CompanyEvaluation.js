import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import companyreviewapplicant from "./CompanyReviewApplicant";

function UserProfile() {
  return (
    <div>
      <Link to="/companyoverview">Company Overview</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 1</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 2</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 3</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 4</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 5</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 6</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 7</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 8</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 9</Link><br></br>
      <Link to="/companyreviewapplicant">Applicant 10</Link>
    </div>
  )
}

export default UserProfile