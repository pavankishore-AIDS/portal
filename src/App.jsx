import React, { Component, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Form} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Departments from './pages/department';
import Events from './pages/events';

function App() {
    return (
      <React.Fragment>
      <Router>
          <div className='header'>
            <Link to={'/'} className='link'>Home</Link>
            <Link to={'/about'} className='link'>About</Link>
            <Link to={'/department'} className='link'>Departments</Link>
            <Link to={'/events'} className='link'>Events</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/department' element={<Departments />}></Route>
            <Route path='/events' element={<Events />}></Route>
          </Routes>
        </Router>
        <center className='footer'>
          <p className='footer2'>© 2024 Saveetha Engineering College. All rights reserved.</p>
        </center>
      </React.Fragment>
    );
}

export default App