import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserLogin from "./UserLogin";
import CompanyLogin from "./CompanyLogin";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
  return (
    
      <Row>
        
        <Col md="5" >
        <Link to="/userlogin">
          <Card style={{ width: '25rem', height: '30rem' }}>
            <Card.Img variant="top" src="./images/User_login.jpg" />
              <Card.Body>
                
                  <Button variant="primary">User Login</Button>
                
              </Card.Body>
          </Card>
          </Link>   
          
        </Col>
        <Col md="2">Blä2
        </Col>
        <Col md="5">
        <Link to="/companylogin">Company Login</Link>
        </Col>
      </Row>
    
        
  )
}

export default Home