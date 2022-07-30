import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import CompanyEdit from "./CompanyEdit";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import team_rocket from '../images/Jobdetails/team_rocket.jpg';

function UserProfile() {
  return (
    <>
      <div className='d-flex w-100'>
        <Link to="/companyedit" style={{ textDecoration: 'none'  }}>
          <div className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
            Edit your Profile
          </div>
        </Link><br></br>
        <Link to="/companyoverview" style={{ textDecoration: 'none' }}>
          <div className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
            Your Overview
          </div>
        </Link>
      </div>
      <Container fluid="lg" className='d-flex'>
        <Col className='justify-content-center' md="8">
          <Row>
            <div className="bg-white rounded mb-2 opacity-75">
              <div className="text-center p-2">
                <h2 className='fw-bold fs-1'>Team Rocket</h2><br></br>
                <p>Team Rocket blasts off at the speed of light! Surrender now, or prepare to fight! Meowth! That's right!</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="bg-white rounded my-2 opacity-75">
              <div className="text-center p-2 color-dark">
                <h2 className='fw-bold'>Introduction</h2><br></br>
                <p>Team Rocket is a criminal organization set to steal other people's Pokémon, with their headquarters in the Kanto Region and the Johto region and a branch in Sevii Islands. They are headed by Giovanni, who also doubles as the Viridian City Gym Leader.
                  Team Rocket's main objective was obtaining powerful and rare Pokémon to help their criminal syndicate in the hopes of someday taking over the world. They obtain these Pokémon by regular capture, or more often, theft. In addition to this they also perform inhumane experiments on Pokémon to further enhance their power.</p>
              </div>
            </div>
          </Row>
          <Row>
            <Col sm="12">
              <h2 className="text-white my-4">Currently looking for:</h2>
            </Col>
          </Row>
        </Col>
        
        <Col className='justify-content-center w-25 offset-1' md="4">
          <Row>
            <div>
              <img src={team_rocket} style={{ height: '20rem', width:'100%' }} />
            </div>
          </Row>
          <Row>
            <div md="12" className='d-flex justify-content-evenly '>
              <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                Pet
              </div>
              <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                Slave
              </div>
              <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-25 opacity-75">
                Pokémon
              </div>
            </div>
          </Row>
        </Col>
      </Container>
      <Row className='justify-content-evenly'>
          <Col sm="4">
            <Card className='my-4'>
              <Link to="/user_jobdetail"><Card.Img variant="top" src={team_rocket} style={{ height: '18rem' }} /></Link>
              <Card.Body>
                <Card.Title className='fw-bold'>Rocket bully</Card.Title>
                <Card.Text>
                  Part-time | Bullying
                </Card.Text>
                <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card className='my-4'>
              <Link to="/user_jobdetail"><Card.Img variant="top" src={team_rocket} style={{ height: '18rem' }} /></Link>
              <Card.Body>
                <Card.Title className='fw-bold'>Rocket Researcher</Card.Title>
                <Card.Text>
                  Full-time | Research
                </Card.Text>
                <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card className='my-4'>
              <Link to="/user_jobdetail"><Card.Img variant="top" src={team_rocket} style={{ height: '18rem' }} /></Link>
              <Card.Body>
                <Card.Title className='fw-bold'>Rocket Board</Card.Title>
                <Card.Text>
                  Full-Time | World Domination
                </Card.Text>
                <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          </Row>
    </>
  )
}

export default UserProfile