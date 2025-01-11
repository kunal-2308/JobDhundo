import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/shared/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import Login from './components/shared/Login';
import Footer from './components/shared/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
