
import './App.css';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import LandingPage from './Components/LandingPage';
import ProjectPage from './Components/ProjectPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}

export default App;
