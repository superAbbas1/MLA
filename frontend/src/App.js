import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/home/Home/Home';
import logo from '../src/pages/header/images/logo-white.png';
import { servicesData } from './pages/services/servicesData';
import ServicePage from './pages/services/ServicePage';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import useScrollAnimation from './components/useScrollAnimation';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    document.body.style.overflow = isSidebarOpen ? 'auto' : 'hidden';
  };

  if (isLoading) {
    return (
      <div className={`intro-loader ${fadeOut ? 'fade-out' : ''}`}>
        <img rel='preload' src={logo} alt="Logo" className="glow-logo" />
      </div>
    );
  }

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <main>
        <Routes>
          <Route path="/MLA" element={<Home />} />
          <Route path="/immigration" element={<ServicePage {...servicesData.immigration} />} />
          <Route path="/study-abroad" element={<ServicePage {...servicesData.studyAbroad} />} />
          <Route path="/legal-services" element={<ServicePage {...servicesData.legalServices} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;