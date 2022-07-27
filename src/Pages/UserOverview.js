import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from "./UserProfile";
import User_JobDetail from "./User_JobDetail";


function UserOverview() {
  return (
    <div>
      <Link to="/userprofile">User Profile</Link><br></br>
      <Link to="/user_jobdetail">Pokémon Trainer</Link><br></br>
      <Link to="/user_jobdetail">Pokémon Nurse</Link><br></br>
      <Link to="/user_jobdetail">Pokémon Police</Link><br></br>
      <Link to="/user_jobdetail">Team Rocket</Link><br></br>
    </div>
  )
}

export default UserOverview