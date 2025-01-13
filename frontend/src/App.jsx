import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/user/shared/Navbar';
import Home from './pages/user/Home';
import Profile from './pages/user/Profile';
import Jobs from './pages/user/Jobs';
import Login from './components/user/shared/Login';
import Footer from './components/user/shared/Footer';
import RecruiterLogin from './components/recruiter/Login';

function App() {
  return (
    <>
      
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path='/user/login' element={<Login/>}/>


         {/* Recruiter Routes */}
         <Route path='/recruiter/orgaisation/signup' element={<RecruiterLogin/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
