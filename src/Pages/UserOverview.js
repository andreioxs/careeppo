import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from "./UserProfile";
import User_JobDetail from "./User_JobDetail";
import QuizStart from "./QuizStart";
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




function UserOverview() {
  return (
    // <div>
    //   <Link to="/userprofile">User Profile</Link><br></br>
    //   <Link to="/user_jobdetail">Pokémon Trainer</Link><br></br>
    //   <Link to="/user_jobdetail">Pokémon Nurse</Link><br></br>
    //   <Link to="/user_jobdetail">Pokémon Police</Link><br></br>
    //   <Link to="/user_jobdetail">Team Rocket</Link><br></br>
    // </div>

    // <> FRAGMENT 
    <>
      <Row className='justify-content-center'>
        <Col xs="12">
          <div className="bg-white mx-5 rounded-4 opacity-75">
            <div className="text-center text-dark p-2 ">
              <h2 className='fw-bold '>Welcome back Hans-Jürgen,</h2><br></br>
              <p>random motivational quotes :-)</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='justify-content-evenly'>
        <Col xs="12" md="4">
          <Link to="/userprofile" style={{ textDecoration: 'none' }}>
            <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold opacity-75">
              Tests
            </div>
          </Link>
        </Col>
        <Col xs="12" md="4">
          <Link to="/userprofile" style={{ textDecoration: 'none' }}>
            <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold opacity-75">
              Check CV
            </div>
          </Link>
        </Col>
        <Col xs="12" md="4">
          <Link to="/userprofile" style={{ textDecoration: 'none' }}>
            <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold opacity-75">
              User Profile
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h2 className="text-white my-4">Our recommendations</h2>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={hacker} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Anonymous Hacker</Card.Title>
              <Card.Text>
                Part-time | Non-Profit Organization
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={e_sport} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>E-Sportler</Card.Title>
              <Card.Text>
                Full-time | Soccer
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={team_rocket} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Join Team Rocket</Card.Title>
              <Card.Text>
                Full-Time | World Domination
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h2 className="text-white my-4">Matching your Skills</h2>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={frontend_dev} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Frontend Developer</Card.Title>
              <Card.Text>
                Full-time | Marketing
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={backend_dev} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Backend Developer</Card.Title>
              <Card.Text>
                Full-time | IT
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={scrum_master} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Agile Scrum Master</Card.Title>
              <Card.Text>
                Full-time | IT-Services & Consulting
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h2 className="text-white my-4">You might also be interested in</h2>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={Data_analyst} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Data Analyst</Card.Title>
              <Card.Text>
                Part-time | Marketing
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={date_science} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Data Science</Card.Title>
              <Card.Text>
                Full-time | Government
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md="4">
          <Card className='my-4'>
            <Link to="/user_jobdetail"><Card.Img variant="top" src={pokemon_police} style={{ height: '18rem' }} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold'>Pokemon Police</Card.Title>
              <Card.Text>
                Full-time | Non-profit Organization
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="warning">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default UserOverview



