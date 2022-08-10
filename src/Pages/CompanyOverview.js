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
      <Row className='justify-content-center'>
        <Col xs="12" >
          <div className="mx-5 rounded-4" style={{ background: 'rgba(255,255,255,0.9)'}}>
            <div className="text-center text-dark p-2 ">
              <h2 className='fw-bold'>Welcome back Giovanni,</h2><br></br>
              <p>You have <b>113</b> new Evaluations, <b>33</b> Bookmarked, <b>1.864</b> Views.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='justify-content-evenly'>
        <Col xs="12" md="4">
        <Link to="/companyjobadd" style={{ textDecoration: 'none' }}>
          <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold" style={{ background: 'rgba(255,255,255,0.9)'}}>
            Add new Job
          </div>
          </Link>
        </Col>
        <Col xs="12" md="4">
          <Link to="/companyprofile" style={{ textDecoration: 'none' }}>
            <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold" style={{ background: 'rgba(255,255,255,0.9)'}}>
            Company Profile
          </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h2 className="text-white my-4">Your Job Postings</h2>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={hacker} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Anonymous Hacker</Card.Title>
              <Card.Text>
                <b>6</b> Evaluations | <b>28</b> Bookmarked | <b>33</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={e_sport} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>E-Sportler</Card.Title>
              <Card.Text>
              <b>6</b> Evaluations | <b>28</b> Bookmarked | <b>33</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={team_rocket} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Join Team Rocket</Card.Title>
              <Card.Text>
              <b>33</b> Evaluations | <b>12</b> Bookmarked | <b>324</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={frontend_dev} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Frontend Developer</Card.Title>
              <Card.Text>
              <b>11</b> Evaluations | <b>28</b> Bookmarked | <b>128</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={backend_dev} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Backend Developer</Card.Title>
              <Card.Text>
              <b>2</b> Evaluations | <b>12</b> Bookmarked | <b>-30</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={scrum_master} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Agile Scrum Master</Card.Title>
              <Card.Text>
              <b>22</b> Evaluations | <b>15</b> Bookmarked | <b>66</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={Data_analyst} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Data Analyst</Card.Title>
              <Card.Text>
              <b>3</b> Evaluations | <b>12</b> Bookmarked | <b>321</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={date_science} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Data Science</Card.Title>
              <Card.Text>
              <b>33</b> Evaluations | <b>33</b> Bookmarked | <b>33</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
          <Link to="/companyevaluation"><Card.Img variant="top" src={pokemon_police} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Pokemon Police</Card.Title>
              <Card.Text>
              <b>326</b> Evaluations | <b>2</b> Bookmarked | <b>868</b> Views
              </Card.Text>
              <Link to="/companyevaluation"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CompanyOverview