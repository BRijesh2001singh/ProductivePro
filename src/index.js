import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Userlogin from './pages/userlogin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/userlogin' element={<Userlogin />} />
    </Routes>
  </Router>
);
