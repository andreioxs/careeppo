import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import QuizStart from './QuizStart';

function User_JobDetail() {
  return (
    <div>
      <Link to="/useroverview">Back to Overview</Link><br></br>
      Job Details<br></br>
      <Link to="/quizstart">Quiz</Link><br></br>
      <Link to="/quizstart">Quiz</Link><br></br>
      <Link to="/quizstart">Quiz</Link>
    </div>
  )
}

export default User_JobDetail