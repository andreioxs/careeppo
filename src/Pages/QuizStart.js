import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import User_JobDetail from './User_JobDetail';
import Questions from './Questions';
import { Container } from 'react-bootstrap';
import background from '../images/Skills/background.jpg'
import Card from 'react-bootstrap/Card';

function QuizStart() {
  return (
    // <div>
    //   <Link to="/useroverview">Back to Overview</Link><br></br>
    //   <Link to="/user_jobdetail">Back to Job Details</Link><br></br>
    //   Quiz Start & Requirements<br></br>
    //   <Link to="/questions">Start the Quiz</Link><br></br>
    // </div>

    <>
      <Container xs="12">
        <div className='d-flex w-100 justify-content-end'>
          <Link to="/useroverview" style={{ textDecoration: 'none' }}>
            <div className="mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
              Back to Overview
            </div>
          </Link>
          <Link to="/user_jobdetail" style={{ textDecoration: 'none' }}>
            <div className="mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
              Back to Details
            </div>
          </Link>
        </div>

        <Link to="/questions" style={{ textDecoration: 'none' }}>
          <div>

            <div className="rounded my-2" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-5 text-dark">
                <h2 className='fw-bold fs-1'>HTML</h2><br></br>
                <div className="text-center p-2 fs-3">
                  <p><b>Questions:</b> 20 | <b>Time:</b> 30 Minutes</p> <hr></hr>
                  <p className='fs-4'>For this test we will activate your camera and record the entire duration.
                    Please do not read the tasks out loud and keep your eyes on the screen.

                    You have a maximum of 90 seconds per question - after this time your currently selected answer will be logged in and you will jump to the next question.</p>
                </div>
              </div>

            </div>
          </div>
        </Link>

      </Container >


    </>
  )
}

export default QuizStart