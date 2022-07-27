import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import User_JobDetail from './User_JobDetail';
import Questions from './Questions';

function QuizStart() {
  return (
    <div>
      <Link to="/useroverview">Back to Overview</Link><br></br>
      <Link to="/user_jobdetail">Back to Job Details</Link><br></br>
      Quiz Start & Requirements<br></br>
      <Link to="/questions">Start the Quiz</Link><br></br>
    </div>
  )
}

export default QuizStart