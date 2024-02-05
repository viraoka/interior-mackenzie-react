import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Residetial from './Residential';
import ContactUs from './ContactUs';
import Commercial from './Commercial';
import Questions from './Questions';



function App() {
  return <Router>
    <nav>
      <h2 className='mackenzie'>Mackenzie  Interiors</h2>
      <Link to="/" className='link'>Home</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/residentialprojects" className='link'>Residential</Link>
      <Link to="/commerciallprojects" className='link'>Commercial</Link>
      <Link to="/questions" className='link'>FAQ</Link>
      <Link to="/contact" className='link'>Contact</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/residentialprojects' element={<Residetial/>} ></Route>
      <Route path='/commerciallprojects' element={<Commercial/>} ></Route>
      <Route path='/questions' element={<Questions/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
    </Routes>

    </Router>
}

export default App;
