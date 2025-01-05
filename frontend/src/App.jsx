import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/shared/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </>
  );
}

export default App;
