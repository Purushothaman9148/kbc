import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import About from './Menu/About';
import Home from './Menu/Home';
import Admission from './Menu/Admission';
import ContactUs from './Menu/ContactUs';
import Courses from './Menu/Courses';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/admission' element={<Admission />}>
        </Route>
        <Route path='/courses' element={<Courses />}>
        </Route>
        <Route path='/contactus' element={<ContactUs />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
