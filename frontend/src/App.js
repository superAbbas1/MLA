// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/home/Home/Home';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for Sidebar

  // Toggle Sidebar Visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} /> {/* Pass toggle function to Header */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} /> {/* Sidebar Component */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
