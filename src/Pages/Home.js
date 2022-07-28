import React from 'react';
import { useNavigate } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import UserLogin from "./UserLogin";
import CompanyLogin from "./CompanyLogin";
import login_img_dev from "../images/User_login.jpg"
import login_img_com from "../images/Company_login.jpg"

function Home() {
  return (
    // <div className="d-flex p-0 justify-content-evenly vh-100 align-items-center">
    //   <div style={{background:`url(${login_img_dev})`}} className="h-75 w-100 m-5"></div>
    //   <div style={{background:`url(${login_img_com})`}} className="h-75 w-100 m-5"></div>
    // </div>
      <Row>
        <Col md="6">
          <div className="d-flex p-5 justify-content-evenly vh-100">
            <Link to="/userlogin">
              <Card style={{ background:`url(${login_img_dev})`, width: '30rem', height: '40rem', backgroundSize:'cover'}}>

              </Card>
            </Link>
          </div>
        </Col>
        <Col md="6">
          <div className="d-flex p-5 justify-content-evenly vh-100 ">
            <Link to="/companylogin">
              <Card style={{ background:`url(${login_img_com})`, width: '30rem', height: '40rem', backgroundSize:'cover' }}>
                
              </Card>
            </Link>
          </div>
        </Col>
      </Row>
    
        
  )
}

// function Invoices() {
//         let navigate = useNavigate();
//         return (
//           <div>
//             <NewInvoiceForm
//               onSubmit={async (event) => {
//                 let newInvoice = await createInvoice(
//                   event.target
//                 );
//                 navigate(`/invoices/${newInvoice.id}`);
//               }}
//             />
//           </div>
//         );
//       }

// function Redirect() {
//   let navigate = useNavigate();
//   function handleClick() {
//     navigate('/home')
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>go home</button>
//     </div>
//   );
// }

export default Home