import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import QuizEnd from './QuizEnd';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

// export default function Questions() {
  //   const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [answers, setAnswers] = useState([]);
  //   const [questions, setQuestions] = useState([]);


  //   useEffect(() => {
  //     fetch("http://localhost:9191/api/questions")
  //     .then(res => res.json())
  //     .then(data => {
  //       setQuestions(data);
  //     })
  //   }, []);
  //   const submitAnswer = () => {

  //   }
  //   useEffect(() => {
  //     if(questions.length && questions.length === answers.length) {
  //       alert("finished!! sending answers to server")
  //     }
  //   }, []);

  //   return (
  //     <>
  //       <Container xs="12">
  //         <div className='d-flex w-100 justify-content-end'>
  //           <Link to="/useroverview" style={{ textDecoration: 'none' }}>
  //             <div className="mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)'}}>
  //               Back to Overview
  //             </div>
  //           </Link>
  //         </div>
  //         <div>
  //           {questions.length && questions[answers.length] && (
  //             <div className="bg-white rounded my-2 opacity-75">
  //             <div className="text-center p-5 text-dark">
  //               <h2 className='fw-bold fs-1'>{questions[answers.length].question}</h2><br></br>
  //               <div className="text-end p-2 fs-5">
  //                 <p><b>Questions:</b> {answers.length + 1 } | 20<hr></hr></p>
  //                 <div className='text-start fs-4'>
  //                   <Form>
  //                     {['checkbox'].map((type) => (
  //                       <div key={type} className="m-3 py-3 text-dark">
  //                         <Form.Check type={type} id={`check-api-${type}`}>
  //                           <Form.Check.Input type={type} isValid />
  //                           <p>How to meet Ladies</p>
  //                         </Form.Check>
  //                         <Form.Check type={type} id={`check-api-${type}`}>
  //                           <Form.Check.Input type={type} isValid />
  //                         </Form.Check>
  //                         <Form.Check.Label>{`HyperTyperMultiLevel`}</Form.Check.Label>
  //                         <Form.Check type={type} id={`check-api-${type}`}>
  //                           <Form.Check.Input type={type} isValid />
  //                         </Form.Check>
  //                         <Form.Check.Label>{`Happy Thoughts Markup Language`}</Form.Check.Label>
  //                         <Form.Check type={type} id={`check-api-${type}`}>
  //                           <Form.Check.Input type={type} isValid />
  //                         </Form.Check>
  //                         <Form.Check.Label>{`How to make Lunch`}</Form.Check.Label>
  //                       </div>
  //                     ))}
  //                   </Form>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           )}

  //          </div>
  //         {/* <Link to="/quizend" style={{ textDecoration: 'none' }}> */}
  //           <button onClick={submitAnswer} className="p-2 text-center rounded-2 text-dark fw-bold w-100" style={{ background: 'rgba(255,255,255,0.9)'}}>
  //             Submit
  //           </button>
  //         {/* </Link> */}
  //       </Container >
  //     </>
  //   )
  // }

  function QuizStart() {
    return (

      <>
        <Container xs="12">
          <div className='d-flex w-100 justify-content-end'>
            <Link to="/useroverview" style={{ textDecoration: 'none' }}>
              <div className="mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75" style={{ background: 'rgba(255,255,255,0.9)' }}>
                Back to Overview
              </div>
            </Link>
          </div>
          <div>
            <div className="rounded my-2" style={{ background: 'rgba(255,255,255,0.9)' }}>
              <div className="text-center p-5 text-dark">
                <h2 className='fw-bold fs-1'>What does HTML stand for</h2><br></br>
                <div className="text-end p-2 fs-5">
                  <p><b>Questions:</b> 1 | 20<hr></hr></p>
                  <div className='text-start fs-4'>
                    <Form>
                      {['checkbox'].map((type) => (
                        <div key={type} className="m-3 py-3 text-dark">
                          <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                            <p>How to meet Ladies</p>
                          </Form.Check>
                          <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                          </Form.Check>
                          <Form.Check.Label>{`HyperTyperMultiLevel`}</Form.Check.Label>
                          <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                          </Form.Check>
                          <Form.Check.Label>{`Happy Thoughts Markup Language`}</Form.Check.Label>
                          <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                          </Form.Check>
                          <Form.Check.Label>{`How to make Lunch`}</Form.Check.Label>
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/quizend" style={{ textDecoration: 'none' }}>
            <button className="p-2 text-center rounded-2 text-dark fw-bold w-100" style={{ background: 'rgba(255,255,255,0.9)' }}>
              Submit
            </button>
          </Link>
        </Container >
      </>
    )
  }

  export default QuizStart