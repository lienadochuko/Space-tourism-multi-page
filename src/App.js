// import logo from './assets/destination/image-moon.png'; http://localhost:3000/static/media/image-moon.d287d07182de3015952f.png
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components';
import data from './data.json';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
