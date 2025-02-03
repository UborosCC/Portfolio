import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './assets/Navbar/Navbar';
import About from './assets/About/About';
import Contact from './assets/Contact/Contact';
import Projects from './assets/Projects/Projects';
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
