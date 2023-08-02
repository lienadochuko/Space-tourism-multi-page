// import logo from './assets/destination/image-moon.png'; http://localhost:3000/static/media/image-moon.d287d07182de3015952f.png
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components';
import { Moon } from './components';
import { Mars } from './components';
import { Europa } from './components';
import { Titan } from './components';
import { Commander } from './components';
import { Specialist } from './components';
import { Pilot } from './components';
import { Engineer } from './components';
import { Vehicle } from './components'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Moon/>} />
        <Route path='/mars' element={<Mars/>} />
        <Route path='/europa' element={<Europa/>} />
        <Route path='/titan' element={<Titan/>} />
        <Route path='/crew' element={<Commander/>} />
        <Route path='/specialist' element={<Specialist/>} />
        <Route path='/pilot' element={<Pilot/>} />
        <Route path='/engineer' element={<Engineer/>} />
        <Route path='/technology' element={<Vehicle/>} />
      </Routes>
    </Router>
  );
}

export default App;
