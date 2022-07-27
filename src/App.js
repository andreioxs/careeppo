import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from "./Pages/Home";
import About from "./Pages/About";
import HowItWorks from "./Pages/HowItWorks";
import UserLogin from "./Pages/UserLogin";
import UserRegister from "./Pages/UserRegister";
import UserOverview from "./Pages/UserOverview";
import UserProfile from "./Pages/UserProfile";
import UserEdit from "./Pages/UserEdit";
import User_JobDetail from "./Pages/User_JobDetail";
import QuizStart from "./Pages/QuizStart";
import Questions from "./Pages/Questions";
import QuizEnd from "./Pages/QuizEnd";
import CompanyLogin from "./Pages/CompanyLogin";
import CompanyProfile from "./Pages/CompanyProfile";
import CompanyEdit from "./Pages/CompanyEdit";
import CompanyOverview from "./Pages/CompanyOverview";
import CompanyEvaluation from "./Pages/CompanyEvaluation";
import CompanyReviewApplicant from "./Pages/CompanyReviewApplicant";
import CompanyContactApplicant from "./Pages/CompanyContactApplicant";
import image from "./images/image_bg.png";
import ErrorPage from "./Pages/ErrorPage";



function App() {
  return (
  <body>
    <Router>
      <Navbar bg="success" variant="light">
      <Container fluid>
  
        <div className='left-nav'>
          <div className='image'>
            <Link to="/"><img src={image} alt="careeppo" /></Link>
          </div>
        </div>
        <div className='right-nav'>
          <Link to="/">
            <div className='header'>
              Home
            </div>
          </Link>
          <Link to="/howitworks">
            <div className='header'>
            How it works
            </div>
          </Link>
          <Link to="/about">
            <div className='header'>
              About us
            </div>
          </Link>
        </div>  
      
  
      </Container>
      </Navbar>
      <Container style={{background: "#31724B", border: "solid 1px black"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/useroverview" element={<UserOverview />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/useredit" element={<UserEdit />} />
        <Route path="/user_jobdetail" element={<User_JobDetail />} />
        <Route path="/quizstart" element={<QuizStart />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/quizend" element={<QuizEnd />} />
        <Route path="/companylogin" element={<CompanyLogin />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/companyedit" element={<CompanyEdit />} />
        <Route path="/companyoverview" element={<CompanyOverview />} />
        <Route path="/companyevaluation" element={<CompanyEvaluation />} />
        <Route path="/companyreviewapplicant" element={<CompanyReviewApplicant />} />
        <Route path="/companycontactapplicant" element={<CompanyContactApplicant />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Container>
    </Router></body>
  );
}

export default App;
