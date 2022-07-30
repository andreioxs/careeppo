import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import companyreviewapplicant from "./CompanyReviewApplicant";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import team_rocket from '../images/Jobdetails/team_rocket.jpg';

function UserProfile() {
  return (
    // <div>
    //   <Link to="/companyoverview">Company Overview</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 1</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 2</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 3</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 4</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 5</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 6</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 7</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 8</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 9</Link><br></br>
    //   <Link to="/companyreviewapplicant">Applicant 10</Link>
    // </div>

    <>
      <div xs="12" className='d-flex w-100'>
        <Link to="/companyoverview" style={{ textDecoration: 'none' }}>
          <div className="bg-light mb-4  p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
            Back to Overview
          </div>
        </Link>
      </div>
      <Container xs="12" className='d-flex'>
        <Col xs="4"  className='justify-content-center'>
          <Row className='justify-content-center'>
            
              <div className='d-flex justify-content-evenly'>
                <img src={team_rocket} style={{ height: '20rem', width: '90%' }} />
              </div>
            
          </Row>
          <Row>
            <Col xs="9"  className='d-flex justify-content-evenly '>
            <div className="bg-light my-4 p-3 text-center rounded-1 text-dark fw-bold w-75 opacity-75">
                Bookmarked
              </div>
            </Col>
            <Col xs="3"  className='d-flex justify-content-evenly '>
              <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
                XX
              </div>
            </Col>
            </Row>
            <Row>
              <Col xs="9"  className='d-flex justify-content-evenly '>
              <div className="bg-light my-4 p-3 text-center rounded-1 text-dark fw-bold w-75 opacity-75">
                Evaluated
              </div>
              </Col>
            <Col xs="3"  className='d-flex justify-content-evenly '>
              <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
                33
              </div>
            </Col>
            </Row>
            <Row>
              <Col xs="9"  className='d-flex justify-content-evenly '>
              <div className="bg-light my-4 p-3 text-center rounded-1 text-dark fw-bold w-75 opacity-75">
                Ends in (days)
              </div>
              </Col>
            <Col xs="3"  className='d-flex justify-content-evenly '>
              <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
                12
              </div>
            </Col>
            </Row>
        </Col>
        <Col className='h-25 w-100% justify-content-center offset-1' md="8">
          <Row>
            <div className="bg-white rounded mb-2 opacity-75">
              <div className="text-center p-2">
                <h2 className='fw-bold fs-1'>Rocket Bully</h2><br></br>
                <p className='fs-3'>Team Rocket Ltd.</p>
              </div>
            </div>
          </Row>
          
          
        </Col>
      </Container>
    </>
  )
}

export default UserProfile