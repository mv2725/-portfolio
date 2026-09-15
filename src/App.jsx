import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Project from './Components/Projects/Project';
import ContactForm from './Components/Connect/Connect';
import Footer from './Components/Footer/Footer';
import ParticleBackground from './Components/Background/ParticleBackground';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import certificates from './Components/Certificates/Certificates';
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Project />
      </section>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full text-white">
        <ParticleBackground />
          <CustomCursor />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;