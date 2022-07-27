import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import QuizEnd from './QuizEnd';

function QuizStart() {
  return (
    <div>
      <Link to="/useroverview">Back to Overview</Link><br></br>
            Questions over Questions<br></br>
      <Link to="/quizend">Submit</Link><br></br>
    </div>
  )
}

export default QuizStart