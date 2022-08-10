import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import UserEdit from "./UserEdit";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ash_pp from '../images/ash_pp.jpg';

function UserProfile() {
  return (

    <>
      <div xs='12' className='d-flex justify-content-end'>
        <Link to="/useredit" style={{ textDecoration: 'none' }}>
          <div xs='6' className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold opacity-75">
            Edit your Profile
          </div>
        </Link><br></br>
        <Link to="/useroverview" style={{ textDecoration: 'none' }}>
          <div xs='6' className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold opacity-75">
            Your Overview
          </div>
        </Link>
      </div>
      <Container fluid="lg" className='d-flex'>
        <Col md="4" className='justify-content-center'>
        <Row className='offset-1'>
            <div>
              <img src={ash_pp} style={{ height: '20rem' }} />
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
          <Row className='d-flex justify-content-evenly '>
            <div xs="12" md="12" className="bg-white rounded my-4 opacity-75 w-75">
              <div className="text-center p-3">
                <h2 className='fw-bold fs-1'>Something interesting?!</h2><br></br>
                <p>Sport, Food, </p>
              </div>
            </div>
          </Row>
        </Col>
        <Col md="8" className='w-100% justify-content-center'>
          <Row>
            <div className="bg-white rounded mb-2 opacity-75">
              <div className="text-center p-2">
                <h2 className='fw-bold fs-1'>Welcome back Hans-Jürgen,</h2><br></br>
                <p className='fs-5'>random motivational quotes :-)</p>
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
                <h2 className='fw-bold fs-4'>Your Path</h2><br></br>
                <p>This summary will be forwarded to interested Companys.</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="bg-white rounded my-2 opacity-75">
              <h2 className=' text-center fw-bold fs-4 py-2'>Professional Cat Petter</h2><br></br>
              <div className=" d-flex text-center px-2">
                <div md="2" className="text-center w-75">
                  <div className='fw-bold fs-5 mx-4'>2015 - 2022</div>
                </div>
                <div md="8" className="text-start">
                  <p>I like cats - they are so cute and don’t want to harm anybody. I like beeing their slave and do everything they want.
                    I discovered my passion for cats in my childhood, because a wild Pikachu attacked me and Meowth saved me - since then I'm her slave.</p>
                </div>
              </div>
              <div md="2" className='d-flex justify-content-evenly'>
                <div className="bg-warning my-4 p-3 text-center rounded-5 text-dark fw-bold w-25">
                  Pet
                </div>
                <div className="bg-warning my-4 p-3 text-center rounded-5 text-dark fw-bold w-25">
                  Slave
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="bg-white rounded my-2 opacity-75">
              <h2 className=' text-center fw-bold fs-4 py-2'>Professional Pokémon Trainer</h2><br></br>
              <div className=" d-flex text-center px-2">
                <div md="2" className="text-center w-75">
                  <div className='fw-bold fs-5 mx-4'>2015 - 2022</div>
                </div>
                <div md="8" className="text-start">
                  <p>I started with only one Pokémon and catched over the years all 150 Pokémon - i refuse to accept any other Pokémon! Since I found my real passion and due to the reason that there are way to many Names to remember, I decided to end my career as Arena Champion of all 8 Citys.</p>
                </div>
              </div>
              <div md="12" className='d-flex justify-content-evenly '>
                <div className="bg-warning my-4 p-3 text-center rounded-5 text-dark fw-bold w-25">
                  Pet
                </div>
                <div className="bg-warning my-4 p-3 text-center rounded-5 text-dark fw-bold w-25">
                  Slave
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Container>
    </>



  )
}

export default UserProfile