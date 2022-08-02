import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import QuizEnd from './QuizEnd';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function QuizStart() {
  return (
    // <div>
    //   <Link to="/useroverview">Back to Overview</Link><br></br>
    //         Questions over Questions<br></br>
    //   <Link to="/quizend">Submit</Link><br></br>
    // </div>
    <>
      <Container xs="12">
        <div className='d-flex w-100 justify-content-end'>
          <Link to="/useroverview" style={{ textDecoration: 'none' }}>
            <div className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
              Back to Overview
            </div>
          </Link>

        </div>

        
          <div>
            <div className="bg-white rounded my-2 opacity-75">
              <div className="text-center p-5 text-dark">
                <h2 className='fw-bold fs-1'>What does HTML stand for</h2><br></br>
                <div className="text-end p-2 fs-5">
                  <p><b>Questions:</b> 1 | 20<hr></hr></p>
                  <div className='text-start fs-4'>
                    <Form>
                      {['checkbox'].map((type) => (
                        <div key={type} className="m-3 py-3 text-dark">
                          <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                            <p>How to meet Ladies</p>
                          </Form.Check>
                          <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                          </Form.Check>
                            <Form.Check.Label>{`HyperTyperMultiLevel`}</Form.Check.Label>
                          <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                          </Form.Check>
                            <Form.Check.Label>{`Happy Thoughts Markup Language`}</Form.Check.Label>
                          <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                          </Form.Check>
                            <Form.Check.Label>{`How to make Lunch`}</Form.Check.Label>
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        <Link to="/quizend" style={{ textDecoration: 'none' }}>
          <button className="bg-light p-2 text-center rounded-2 text-dark fw-bold w-100 opacity-75">
            Submit
          </button>
        </Link>

      </Container >


    </>
  )
}

export default QuizStart