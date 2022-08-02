import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyProfile from "./CompanyProfile";
import CompanyJobAdd from "./CompanyJobAdd";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import backend_dev from '../images/Jobdetails/backend_dev.jpg';
import frontend_dev from '../images/Jobdetails/frontend_dev.jpg';
import Data_analyst from '../images/Jobdetails/Data_analyst.jpg';
import date_science from '../images/Jobdetails/data_science.jpg';
import e_sport from '../images/Jobdetails/e_sport.jpg';
import hacker from '../images/Jobdetails/hacker.jpg'
import pokemon_police from '../images/Jobdetails/pokemon_police.jpg'
import Project_manager from '../images/Jobdetails/Project_manager.jpg'
import scrum_master from '../images/Jobdetails/scrum_master.jpg'
import team_rocket from '../images/Jobdetails/team_rocket.jpg'

function CompanyOverview() {
  return (
    // <div>
    //   <Link to="/companyprofile">Company Profile</Link><br></br>
    //   <Link to="/companyevaluation">Job Overview & Evaluation</Link>
    // </div>

    <>
      <Row>
        <Col sm="12" >
          <div className="bg-white my-3 rounded-pill">
            <div className="text-center p-5">
              <h2 className='fw-bold'>Welcome back COMPANY,</h2><br></br>
              <p>You have <b>XX</b> new Evaluations, <b>XX</b> Bookmarked, <b>XX</b> Views.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col sm="2">
        <Link to="/companyjobadd" style={{ textDecoration: 'none' }}>
          <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold">
            Add new Job
          </div>
          </Link>
        </Col>
        <Col sm="2">
          <Link to="/companyprofile" style={{ textDecoration: 'none' }}>
            <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold">
            Company Profile
          </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <h2 className="text-white my-4">Your Job Postings</h2>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={hacker} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Anonymous Hacker</Card.Title>
              <Card.Text>
                XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={e_sport} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>E-Sportler</Card.Title>
              <Card.Text>
              XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={team_rocket} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Join Team Rocket</Card.Title>
              <Card.Text>
              XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={frontend_dev} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Frontend Developer</Card.Title>
              <Card.Text>
              XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={backend_dev} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Backend Developer</Card.Title>
              <Card.Text>
              XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={scrum_master} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Agile Scrum Master</Card.Title>
              <Card.Text>
              XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={Data_analyst} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Data Analyst</Card.Title>
              <Card.Text>
              XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={date_science} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Data Science</Card.Title>
              <Card.Text>
              XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={pokemon_police} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Pokemon Police</Card.Title>
              <Card.Text>
              XX Evaluations | XX Bookmarked | XXX Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CompanyOverview