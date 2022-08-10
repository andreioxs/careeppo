import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import companyreviewapplicant from "./CompanyReviewApplicant";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import team_rocket from '../images/Jobdetails/team_rocket.jpg';
import Evaluation from '../Components/Evaluation.js'

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
      <div xs="12" className='d-flex justify-content-end'>
        <Link to="/companyoverview" style={{ textDecoration: 'none' }}>
          <div className="mb-4 p-3 text-center rounded-5 text-dark fw-bold w-100" style={{ background: 'rgba(255,255,255,0.9)'}}>
            Back to Overview
          </div>
        </Link>
      </div>
      <Container xs="12" className='d-flex'>
        <Col xs="4" className='justify-content-center'>
          <Row className='justify-content-center'>
            <div className='d-flex justify-content-evenly offset-1'>
              <img src={team_rocket} style={{ height: '20rem', width: '100%' }} />
            </div>

          </Row>
          <Row>
            <Col xs="9" className='d-flex justify-content-evenly '>
              <div className="my-4 p-3 text-center rounded-1 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
                Bookmarked
              </div>
            </Col>
            <Col xs="3" className='d-flex justify-content-evenly '>
              <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
                12
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="9" className='d-flex justify-content-evenly '>
              <div className="my-4 p-3 text-center rounded-1 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
                Evaluated
              </div>
            </Col>
            <Col xs="3" className='d-flex justify-content-evenly '>
              <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
                33
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="9" className='d-flex justify-content-evenly '>
              <div className="my-4 p-3 text-center rounded-1 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
                Ends in (days)
              </div>
            </Col>
            <Col xs="3" className='d-flex justify-content-evenly '>
              <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
                12
              </div>
            </Col>
          </Row>
        </Col>
        <Col className='h-25 w-100% justify-content-center offset-1' md="8">
          <Row>
            <div className="rounded mb-2" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2">
                <h2 className='fw-bold fs-1'>Rocket Bully</h2><br></br>
                <p className='fs-3'>Team Rocket Ltd.</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="rounded mb-2" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center pt-3">
                <h2 className='fw-bold fs-3'>Search/Filter Bar</h2><br></br>
              </div>
            </div>
          </Row><hr></hr>
          <Row>
            <div className="rounded my-2  w-100" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2">
                <Row className='rounded justify-content-center  mb-2 p-2'>
                  <Link to="/companyreviewapplicant" style={{ textDecoration: 'none' }}>
                    <h2 className='fw-bold text-dark fs-3'>Gary Eich</h2><br></br>
                    <div className=" rounded text-center text-dark " style={{ background: 'rgba(249,180,45,0.8)' }}>
                      <Row>
                        <div className='d-flex justify-content-evenly mt-3'>
                          <p><b>89%</b> Overall</p>
                          |
                          <p><b>98%</b> Dominating the World</p>
                          <p><b>80%</b> Toxication</p>
                          <p><b>88%</b> Bad Manners</p>
                        </div>
                      </Row>
                    </div>
                  </Link>
                </Row>
              </div>
            </div>
          </Row>
          <Row>
          <div className="rounded my-2  w-100" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2">
                <Row className='rounded justify-content-center  mb-2 p-2'>
                  <Link to="/companyreviewapplicant" style={{ textDecoration: 'none' }}>
                    <h2 className='fw-bold text-dark fs-3'>Misty Waterflower</h2><br></br>
                    <div className=" rounded text-center text-dark " style={{ background: 'rgba(249,180,45,0.8)' }}>
                      <Row>
                        <div className='d-flex justify-content-evenly mt-3'>
                          <p><b>57%</b> Overall</p>
                          |
                          <p><b>22%</b> Dominating the World</p>
                          <p><b>75%</b> Toxication</p>
                          <p><b>75%</b> Bad Manners</p>
                        </div>
                      </Row>
                    </div>
                  </Link>
                </Row>
              </div>
            </div>
          </Row>
          <Row>
          <div className="rounded my-2  w-100" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2">
                <Row className='rounded justify-content-center  mb-2 p-2'>
                  <Link to="/companyreviewapplicant" style={{ textDecoration: 'none' }}>
                    <h2 className='fw-bold text-dark fs-3'>Ash Ketchum</h2><br></br>
                    <div className=" rounded text-center text-dark " style={{ background: 'rgba(249,180,45,0.8)' }}>
                      <Row>
                        <div className='d-flex justify-content-evenly mt-3'>
                          <p><b>55%</b> Overall</p>
                          |
                          <p><b>100%</b> Dominating the World</p>
                          <p><b>5%</b> Toxication</p>
                          <p><b>60%</b> Bad Manners</p>
                        </div>
                      </Row>
                    </div>
                  </Link>
                </Row>
              </div>
            </div>
          </Row>
          <Row>
          <div className="rounded my-2  w-100" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2">
                <Row className='rounded justify-content-center  mb-2 p-2'>
                  <Link to="/companyreviewapplicant" style={{ textDecoration: 'none' }}>
                    <h2 className='fw-bold text-dark fs-3'>Rocko Brock</h2><br></br>
                    <div className=" rounded text-center text-dark " style={{ background: 'rgba(249,180,45,0.8)' }}>
                      <Row>
                        <div className='d-flex justify-content-evenly mt-3'>
                          <p><b>28%</b> Overall</p>
                          |
                          <p><b>28%</b> Dominating the World</p>
                          <p><b>25%</b> Toxication</p>
                          <p><b>30%</b> Bad Manners</p>
                        </div>
                      </Row>
                    </div>
                  </Link>
                </Row>
              </div>
            </div>
          </Row>
          <Row>
          <div className="rounded my-2  w-100" style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2">
                <Row className='rounded justify-content-center  mb-2 p-2'>
                  <Link to="/companyreviewapplicant" style={{ textDecoration: 'none' }}>
                    <h2 className='fw-bold text-dark fs-3'>Abra Kadabra</h2><br></br>
                    <div className=" rounded text-center text-dark " style={{ background: 'rgba(249,180,45,0.8)' }}>
                      <Row>
                        <div className='d-flex justify-content-evenly mt-3'>
                          <p><b>26%</b> Overall</p>
                          |
                          <p><b>12%</b> Dominating the World</p>
                          <p><b>45%</b> Toxication</p>
                          <p><b>20%</b> Bad Manners</p>
                        </div>
                      </Row>
                    </div>
                  </Link>
                </Row>
              </div>
            </div>
          </Row>


        </Col>
      </Container>
    </>
  )
}

export default UserProfile