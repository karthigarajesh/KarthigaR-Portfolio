import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

const HomePage = () => (
  <>
    <Hero />
    <Projects />
  </>
);

function App() {
  return (
    <Router>
      <MyNavbar />
      <div className="container-fluid px-0">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
