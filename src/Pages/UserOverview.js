import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from "./UserProfile";
import User_JobDetail from "./User_JobDetail";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
      <Row>
        <Col sm="12" >
          <div className="bg-white my-4">
            <div className="text-center p-5">
              <h2>Welcome back Hans-Jürgen,</h2>
              <p>random motivational quotes :-)</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col sm="2">
         <div className="bg-light my-4 p-3 text-center rounded-5">
            Tests
          </div>
        </Col>
        <Col sm="2">
         <div className="bg-light my-4 p-3 text-center rounded-5">
            Check CV
          </div>
        </Col>
        <Col sm="2">
        <Link to="/userprofile" style={{ textDecoration: 'none' }}><div className="bg-light my-4 p-3 text-center rounded-5">
            User Profile
          </div>
        </Link>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <h2 className="text-white my-4">Our recommendation</h2>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png" style={{ height: '18rem' }} />
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
                Join Team Rocket and you will be the best
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
        <Card className='my-4'>
            <Card.Img variant="top" src="https://great-wok.de/wp-content/uploads/2020/04/placeholder.png" style={{ height: '18rem' }}/>
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
          Join Team Rocket and you will be the best
        </Card.Text>
        <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
      </Card.Body>
    </Card>
        </Col>
        <Col sm="4">
        <Card className='my-4'>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={{ height: '18rem' }}/>
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
          Join Team Rocket and you will be the best
        </Card.Text>
        <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
        </Card.Body>
    </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <h2 className="text-white my-4">Matching your Skills</h2>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png" style={{ height: '18rem' }} />
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
                Join Team Rocket and you will be the best
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
        <Card className='my-4'>
            <Card.Img variant="top" src="https://great-wok.de/wp-content/uploads/2020/04/placeholder.png" style={{ height: '18rem' }}/>
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
          Join Team Rocket and you will be the best
        </Card.Text>
        <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
      </Card.Body>
    </Card>
        </Col>
        <Col sm="4">
        <Card className='my-4'>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={{ height: '18rem' }}/>
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
          Join Team Rocket and you will be the best
        </Card.Text>
        <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <h2 className="text-white my-4">You might also be interested in</h2>
        </Col>
        <Col sm="4">
          <Card className='my-4'>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png" style={{ height: '18rem' }} />
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
                Join Team Rocket and you will be the best
              </Card.Text>
              <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
        <Card className='my-4'>
            <Card.Img variant="top" src="https://great-wok.de/wp-content/uploads/2020/04/placeholder.png" style={{ height: '18rem' }}/>
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
          Join Team Rocket and you will be the best
        </Card.Text>
        <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
      </Card.Body>
    </Card>
        </Col>
        <Col sm="4">
        <Card className='my-4'>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={{ height: '18rem' }}/>
            <Card.Body>
              <Card.Title>PokemonTrainer</Card.Title>
              <Card.Text>
          Join Team Rocket and you will be the best
        </Card.Text>
        <Link to="/user_jobdetail"><Button variant="primary">Job Details</Button></Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </>
  )
}

export default UserOverview



