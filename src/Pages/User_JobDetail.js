import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import QuizStart from './QuizStart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import team_rocket from '../images/Jobdetails/team_rocket.jpg';

function User_JobDetail() {
  return (
    // <div>
    //   <Link to="/useroverview">Back to Overview</Link><br></br>
    //   Job Details<br></br>
    //   <br></br>
    //   <Link to="/quizstart">Quiz</Link><br></br>
    //   <Link to="/quizstart">Quiz</Link>
    // </div>

    <>
      <div xs='12' className='d-flex justify-content-end'>
        <Link to="/useroverview" style={{ textDecoration: 'none' }}>
        <div xs='6' className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold opacity-75">
            Your Overview
          </div>
        </Link>
      </div>
      <Container xs="12" className='d-flex'>
        <Col md="4" className='justify-content-center'>
          <Row className='justify-content-center'>
            <Link to="/companyprofile" style={{ textDecoration: 'none' }}>
              <div className='offset-1'>
                <img src={team_rocket} style={{ height: '20rem', width: '90%' }} />
              </div>
            </Link>
          </Row>
          <Row className='justify-content-evenly '>
            <div xs="12" className="bg-white rounded my-4 opacity-75 w-75">
              <div className="text-center p-3">
                <h2 className='fw-bold fs-1'>Kununu Review</h2><br></br>
                <h5>ATTENTION hazardous to health!</h5>
                <p>You go about your normal job, but you keep getting blown up by other Pokémon, so you end up on a different continent. Fortunately, however, the company guarantees a survival guarantee and an appearance in the next episode.</p>
              </div>
            </div>
          </Row>
        </Col>
        <Col md="8" className='w-100% justify-content-center'>
          <Row>
            <div className="bg-white rounded mb-2 opacity-75">
              <div className="text-center p-2">
                <h2 className='fw-bold fs-1'>Rocket Bully</h2><br></br>
                <p className='fs-3'>Team Rocket Ltd.</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="bg-white rounded my-2 opacity-75">
              <div className="text-center p-2">
                <h2 className='fw-bold'>Introduction</h2><br></br>
                <p>The series starts with the episode "Pokémon, I Choose You!", with Ash's tenth birthday, which according to Pokémon trainer registration bylaws allowed him to become a full-fledged Pokémon trainer and obtain a starter Pokémon. As a ten-year-old hailing from Pallet Town in the Kanto region, Ash was offered a choice between three Pokémon as his starter: Bulbasaur, Squirtle and Charmander. While he was planning to choose Squirtle, he received the electric type Pokémon Pikachu from Professor Oak instead in this episode, because he woke up late and all the other starter Pokémon had been taken by other trainers. After receiving Pikachu and a Pokédex, Ash left Pallet Town to start his journey. Since then Ash has traveled the world of Pokémon, competed in many challenges and caught newer Pokémon. He has met many companions, such as Misty and Brock.</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="bg-white rounded my-2 opacity-75">
              <div className="text-center p-2">
                <h2 className='fw-bold fs-4'>What's waiting for you</h2><br></br>
                <p>Full-Time | World Domination<hr></hr>There's a team full of toxic but handsome humans waiting for you! We'll provide you with exactly one Uniform - with our stylish Company Logo on it. You'll probably get blown up every day - but we guarantee your Survival!</p>
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
            <Col sm="4">
              <Link to="/quizstart" style={{ textDecoration: 'none' }}>
                <div md="2" className='d-flex justify-content-evenly mt-5'>
                  <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-100 opacity-75">
                    Dominating the world
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm="10" md="8">
              <div className="bg-white rounded my-2 opacity-75">
                <div className="text-center p-2">
                  <h2 className='fw-bold fs-4'>Specifications</h2><br></br>
                  <p><b>Questions:</b> 20 <hr></hr><b>Time:</b> 30 Minutes</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Link to="/quizstart" style={{ textDecoration: 'none' }}>
                <div md="4" lg="2" className='d-flex justify-content-evenly mt-5'>
                  <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-100 opacity-75">
                    Toxication
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm="10" md="8">
              <div className="bg-white rounded my-2 opacity-75">
                <div className="text-center p-2">
                  <h2 className='fw-bold fs-4'>Specifications</h2><br></br>
                  <p><b>Questions:</b> 20 <hr></hr><b>Time:</b> 30 Minutes</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Link to="/quizstart" style={{ textDecoration: 'none' }}>
                <div md="2" className='d-flex justify-content-evenly mt-5'>
                  <div className="bg-light my-4 p-3 text-center rounded-5 text-dark fw-bold w-100 opacity-75">
                    Bad Manners
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm="10" md="8">
              <div className="bg-white rounded my-2 opacity-75">
                <div className="text-center p-2">
                  <h2 className='fw-bold fs-4'>Specifications</h2><br></br>
                  <p><b>Questions:</b> 20 <hr></hr><b>Time:</b> 30 Minutes</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  )
}

export default User_JobDetail