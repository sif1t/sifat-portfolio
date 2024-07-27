// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header ';
import About from './components/About ';
import Services from './components/Services ';
import Portfolio from './components/Portfolio ';
import Contact from './components/Contact ';
import Footer from './components/Footer ';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="flex">
         <Navbar/>
        <div className="ml-16 md:ml-1/6 w-full md:w-5/6">
          <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
};

export default App;
