import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import User_JobDetail from './User_JobDetail';
import { Container } from 'react-bootstrap';


function QuizStart() {
  return (
    // <div>
    //   Congratulations and thank you for taking the Quiz<br></br>
    //   <Link to="/useroverview">Back to Overview</Link><br></br>
    //   <Link to="/user_jobdetail">Back to Job Details</Link><br></br>
    // </div>
    <>
      <Container xs="12">
        <div className='d-flex w-100'>
          <Link to="/useroverview" style={{ textDecoration: 'none' }}>
            <div className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
              Back to Overview
            </div>
          </Link>
          <Link to="/user_jobdetail" style={{ textDecoration: 'none' }}>
            <div className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
              Back to Details
            </div>
          </Link>
        </div>
        <div>

          <div className="bg-white rounded my-2 opacity-75">
            <div className="text-center p-5 text-dark">
              <h2 className='fw-bold fs-1'>Congratulations</h2><br></br>
              <div className="text-center p-2 fs-3">

                <p className='fs-4'>Your test will be evaluated and send to the company - they'll get in touch with you soon.</p>
              </div>
            </div>

          </div>
        </div>


      </Container >


    </>
  )
}

export default QuizStart