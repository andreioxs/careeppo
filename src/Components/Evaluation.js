import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import companyreviewapplicant from "../Pages/CompanyReviewApplicant";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


{/* <Link to="/companyreviewapplicant">Applicant 1</Link><br></br> */ }

function Evaluation() {
    return (
        <Row className='rounded justify-content-center mb-2 p-2'>
            <Link to="/companyreviewapplicant" style={{ textDecoration: 'none' }}>
                <h2 className='fw-bold text-dark fs-3'>Firstname Name</h2><br></br>
                <div className="bg-secondary rounded text-center text-dark opacity-50">
                    <Row>
                        <div className='d-flex justify-content-evenly my-2'>
                            <p>XX Overall</p>
                            |
                            <p>XX SKILL</p>
                            <p>XX SKILL</p>
                            <p>XX SKILL</p>
                        </div>
                    </Row>
                </div>
            </Link>
        </Row>
    )
}

export default Evaluation();