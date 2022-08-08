import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import QuizEnd from './QuizEnd';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { html } from '../Components/html';

function QuizStart() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const [questions, setQuestions] = useState([...html, ...js, ...css]);
  const [select, setSelect] = useState(true);
  const [selectJS, setSelectJS] = useState(true);
  const [html, setHtml] = useState(true);
  const [react, setReact] = useState(true);

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setDisabled(false);
  };
  const change = () => {
    setSelect(!select);
  };


  useEffect(() => {
    if (select && selectJS) {
      setQuestions([...html, ...js, ...css]);
    } else if (!select) {
      setQuestions([...js]);
    } else if (!select) {
      setQuestions([...html]);
    } else if (!select) {
      setQuestions([...css]);
    }
  }, [select]);

  useEffect(() => {
    if (currentQuestion > 0) {
      setDisabled(true);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (select && selectJS) {
      setQuestions([...html, ...js, ...css]);
    } else if (!selectJS) {
      setQuestions([...html]);
    }
  }, [selectJS]);

  return (

    <>
      <Container xs="12">
        <div className='d-flex w-100 justify-content-end'>
          <Link to="/useroverview" style={{ textDecoration: 'none' }}>
            <div className="bg-light mb-4 mx-2 p-3 text-center rounded-5 text-dark fw-bold w-75 opacity-75">
              Back to Overview
            </div>
          </Link>
        </div>
        <div>
          <div className="bg-white rounded my-2 opacity-75">
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
          <button className="bg-light p-2 text-center rounded-2 text-dark fw-bold w-100 opacity-75">
            Submit
          </button>
        </Link>

      </Container >


    </>
  )
}

export default QuizStart