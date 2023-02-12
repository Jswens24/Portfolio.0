
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import LandingPage from './Components/LandingPage';
import NavBar from './Components/NavBar';
import ProjectPage from './Components/ProjectPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
