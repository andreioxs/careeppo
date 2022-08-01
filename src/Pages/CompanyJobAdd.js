import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import QuizStart from './QuizStart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import uploadimage from '../images/uploadimage.jpg';

function CompanyJobAdd() {
    return (


        <>
            <div xs="12" className='d-flex w-100 justify-content-spacea'>
                <Link to="/companyoverview" style={{ textDecoration: 'none' }}>
                    <div className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-100 opacity-75">
                        Your Overview
                    </div>
                </Link>
                <Link to="/companyoverview" style={{ textDecoration: 'none' }}>
                    <div className="bg-light mb-4 mx-4 p-3 text-center rounded-5 text-dark fw-bold w-100 opacity-75">
                        Save & Post
                    </div>
                </Link>
            </div>
            
            <Container xs="12" className='d-flex'>
                <Col md="4" className='justify-content-center'>
                    <Row className='justify-content-center'>
                        <Link to="/companyprofile" style={{ textDecoration: 'none' }}>
                            <div className='offset-1'>
                                <img src={uploadimage} style={{ height: '20rem', width: '90%' }} />
                            </div>
                        </Link>
                    </Row>

                </Col>
                <Col className='h-25 w-100% justify-content-center' md="8">
                    <Row>
                        <div className="bg-white rounded mb-2 opacity-75">
                            <div className="text-center p-2">
                                <h2 className='fw-bold fs-1'>Job Title</h2><br></br>

                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="bg-white rounded my-2 opacity-75">
                            <div className="text-center p-2 color-dark">
                                <h2 className='fw-bold'>About the Company</h2><br></br>
                                <p>Dynamic Content from the Company Page</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="bg-white rounded my-2 opacity-75">
                            <div className="text-center p-2">
                                <h2 className='fw-bold fs-4'>What's waiting for you</h2><br></br>
                                <p>Time | Industry<hr></hr>Box with addable Content.</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="bg-white rounded my-2 opacity-75">
                            <div className="text-center p-2">
                                <h2 className='fw-bold fs-4'>To apply you need to complete following tests</h2>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="bg-light justify-content-evenly rounded my-2 opacity-75">
                            <div className="form-group mt-1 p-3" >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for Skill"

                                />
                            </div>
                        </div>
                    </Row>
                    <Row className='d-flex gap-1 justify-content-evenly mt-3'>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                        <div xs="4" lg="3" className="bg-light mb-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                            Your Overview
                        </div>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default CompanyJobAdd