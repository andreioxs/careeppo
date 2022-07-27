import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserOverview from "./UserOverview";
import User_JobDetail from './User_JobDetail';


function QuizStart() {
  return (
    <div>
      Congratulations and thank you for taking the Quiz<br></br>
      <Link to="/useroverview">Back to Overview</Link><br></br>
      <Link to="/user_jobdetail">Back to Job Details</Link><br></br>
    </div>
  )
}

export default QuizStart