import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyOverview from "./CompanyOverview";
import CompanyEvaluation from "./CompanyEvaluation";
import CompanyContactApplicant from './CompanyContactApplicant';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ash_pp from '../images/ash_pp.jpg';
import Evaluation from '../Components/Evaluation.js'

function CompanyReviewApplicant() {
  return (
    // <div>
    //   <Link to="/companyoverview">Back to Company Overview</Link><br></br>
    //   <Link to="/companycontactapplicant">Shedule a meeting</Link><br></br>
    //   Review Applicant
    // </div>

    <>
      <div xs="12" className='d-flex w-100 justify-content-evenly'>
        <Link to="/useredit" style={{ textDecoration: 'none' }}>
          <div xs="4" md="4" xl="4" className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-100 opacity-75">
            Edit your Profile
          </div>
        </Link>
        <Link to="/useroverview" style={{ textDecoration: 'none' }}>
          <div xs="4" md="4" xl="4" className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-100 opacity-75">
            Your Overview
          </div>
        </Link>
        <Link to="/CompanyContactApplicant" style={{ textDecoration: 'none' }}>
          <div xs="4" md="4" xl="4" className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-100 opacity-75">
            Contact Applicant
          </div>
        </Link>

      </div>
      <Container fluid="lg" className='d-flex'>
        <Col md="4" className='justify-content-center'>
          <Row className='offset-1 mt-2'>
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
            <div md="12" className="bg-white rounded my-4 opacity-75 w-75">
              <div className="text-center p-3">
                <h2 className='fw-bold fs-1'>Interested in:</h2><br></br>
                <p>Catching Pokémon, food, blowing up people </p>
              </div>
            </div>
          </Row>
        </Col>
        <Col className='h-25 w-100% justify-content-center' md="8">
          <Row>
          <div className="rounded my-2 " style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2">
                <Row className='rounded justify-content-center mb-2 p-2'>
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
          <div className="rounded my-2 pt-2"style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2 color-dark">
                <h2 className='fw-bold'>Introduction</h2><br></br>
                <p>The series starts with the episode "Pokémon, I Choose You!", with Ash's tenth birthday, which according to Pokémon trainer registration bylaws allowed him to become a full-fledged Pokémon trainer and obtain a starter Pokémon. As a ten-year-old hailing from Pallet Town in the Kanto region, Ash was offered a choice between three Pokémon as his starter: Bulbasaur, Squirtle and Charmander. While he was planning to choose Squirtle, he received the electric type Pokémon Pikachu from Professor Oak instead in this episode, because he woke up late and all the other starter Pokémon had been taken by other trainers. After receiving Pikachu and a Pokédex, Ash left Pallet Town to start his journey. Since then Ash has traveled the world of Pokémon, competed in many challenges and caught newer Pokémon. He has met many companions, such as Misty and Brock.</p>
              </div>
            </div>
          </Row>
          <Row>
          <div className="rounded my-2 pt-2"style={{ background: 'rgba(255,255,255,0.9)'}}>
              <div className="text-center p-2">
                <h2 className='fw-bold fs-4'>Your Path</h2><br></br>
                <p>This summary will be forwarded to interested Companys.</p>
              </div>
            </div>
          </Row>
          <Row>
          <div className="rounded my-2 pt-2"style={{ background: 'rgba(255,255,255,0.9)'}}>
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
                <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold w-25" style={{ background: 'rgba(249,180,45)' }}>
                  Pet
                </div>
                <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold w-25" style={{ background: 'rgba(249,180,45)' }}>
                  Slave
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="rounded my-2 pt-2"style={{ background: 'rgba(255,255,255,0.9)'}}>
              <h2 className=' text-center fw-bold fs-4 py-2'>Professional Pokémon Trainer</h2><br></br>
              <div className=" d-flex text-center px-2">
                <div md="2" className="text-center w-75">
                  <div className='fw-bold fs-5 mx-4'>1991 - 2015</div>
                </div>
                <div md="8" className="text-start">
                  <p>I started with only one Pokémon and catched over the years all 150 Pokémon - i refuse to accept any other Pokémon! Since I found my real passion and due to the reason that there are way to many Names to remember, I decided to end my career as Arena Champion of all 8 Citys.</p>
                </div>
              </div>
              <div md="12" className='d-flex justify-content-evenly '>
                <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold w-25" style={{ background: 'rgba(249,180,45)' }}>
                  Manager
                </div>
                <div className="my-4 p-3 text-center rounded-5 text-dark fw-bold w-25" style={{ background: 'rgba(249,180,45)' }}>
                  Master
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Container>
    </>
  )
}

export default CompanyReviewApplicant