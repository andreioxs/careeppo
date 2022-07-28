import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import QuizStart from './QuizStart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import team_rocket from '../images/Jobdetails/team_rocket.jpg';

function User_JobDetail() {
  return (
    // <div>
    //   <Link to="/useroverview">Back to Overview</Link><br></br>
    //   Job Details<br></br>
    //   <Link to="/quizstart">Quiz</Link><br></br>
    //   <Link to="/quizstart">Quiz</Link><br></br>
    //   <Link to="/quizstart">Quiz</Link>
    // </div>

<>
<div className='d-flex w-100 offset-1'>
  <Link to="/useroverview" style={{ textDecoration: 'none' }}>
    <div className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
      Your Overview
    </div>
  </Link>
</div>
<Container fluid="lg" className='d-flex'>
  <Col lg="4" className='justify-content-center'>
    <Row className='justify-content-center'>
      <div>
        <img src={team_rocket} style={{ height: '20rem' }} />
      </div>
    </Row>
    {/* <Row>
      <div lg="12" className='d-flex justify-content-evenly '>
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
    </Row> */}
    <Row className='d-flex justify-content-evenly '>
      <div lg="12" className="bg-white rounded my-4 opacity-75 w-75">
        <div className="text-center p-3">
          <h2 className='fw-bold fs-1'>Kununu Review</h2><br></br>
          <h5>ATTENTION hazardous to health!</h5>
          <p>You go about your normal job, but you keep getting blown up by other Pokémon, so you end up on a different continent. Fortunately, however, the company guarantees a survival guarantee and an appearance in the next episode.</p>
        </div>
      </div>
    </Row>
  </Col>
  <Col className='h-25 w-100% justify-content-center' lg="8">
    <Row>
      <div className="bg-white rounded mb-2 opacity-75">
        <div className="text-center p-2">
          <h2 className='fw-bold fs-1'>Rocket Bully</h2><br></br>
          <p>Team Rocket Ltd.</p>
        </div>
      </div>
    </Row>
    <Row>
      <div className="bg-white rounded my-2 opacity-75">
        <div className="text-center p-2 color-dark">
          <h2 className='fw-bold'>Introduction</h2><br></br>
          <p>The series starts with the episode "Pokémon, I Choose You!", with Ash's tenth birthday, which according to Pokémon trainer registration bylaws allowed him to become a full-fledged Pokémon trainer and obtain a starter Pokémon. As a ten-year-old hailing from Pallet Town in the Kanto region, Ash was offered a choice between three Pokémon as his starter: Bulbasaur, Squirtle and Charmander. While he was planning to choose Squirtle, he received the electric type Pokémon Pikachu from Professor Oak instead in this episode, because he woke up late and all the other starter Pokémon had been taken by other trainers. After receiving Pikachu and a Pokédex, Ash left Pallet Town to start his journey. Since then Ash has traveled the world of Pokémon, competed in many challenges and caught newer Pokémon. He has met many companions, such as Misty and Brock.</p>
        </div>
      </div>
    </Row>
    <Row>
      <div className="bg-white rounded my-2 opacity-75">
        <div className="text-center p-2">
          <h2 className='fw-bold fs-4'>What's waiting for you</h2><br></br>
          <p>A motivated and highly toxic company awaits you, which wants to take over the world.
Your team consists of psychopaths and cartoon characters, but they all look pretty! We provide a set of workwear with our stylish logo on the chest.</p>
        </div>
      </div>
    </Row>
    
  </Col>
</Container>
</>
  )
}

export default User_JobDetail