import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import CompanyJobAdd from "./Pages/CompanyJobAdd";
import CompanyEvaluation from "./Pages/CompanyEvaluation";
import CompanyReviewApplicant from "./Pages/CompanyReviewApplicant";
import CompanyContactApplicant from "./Pages/CompanyContactApplicant";
import image from "./images/careeppo.png";
import ErrorPage from "./Pages/ErrorPage";
import { AuthContext } from './context/AuthContext';
import { useLogout } from './hooks/useLogout'
import { useAuthContext } from './hooks/useAuthContext'


function App() {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <Router>
      <Container xs='12' md='12' xl='12'>
        <Navbar xs="12" style={{ justifyContent: 'space-between' }}>
          <div xs='4' >
            <Link to="/"><img src={image} alt="careeppo" /></Link>
          </div>
          <div xs='8' className='d-flex'>
            {user && (
              <div className='d-flex'>
                <Link to="/userprofile" className='mx-4' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}><span className='mx-4'>{user.email}</span></Link>
                <Link to="/"><button onClick={handleClick}>Log out</button></Link>
              </div>
            )}

          </div>
        </Navbar>
      </Container>
      <Container sm='12' md='12' xl='12' style={{ background: "transparent" }}>
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
          <Route path="/companyjobadd" element={<CompanyJobAdd />} />
          <Route path="/companyevaluation" element={<CompanyEvaluation />} />
          <Route path="/companyreviewapplicant" element={<CompanyReviewApplicant />} />
          <Route path="/companycontactapplicant" element={<CompanyContactApplicant />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </Router>


  );
}


export default App;
