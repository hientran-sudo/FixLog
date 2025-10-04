import React from 'react';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';

import MyReports from './pages/MyReports';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (   
    <Router>
      <nav className='navbar'>
        <Link to="/">Home</Link> {" "}
        <Link to="/reports">My Reports</Link> {" "}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reports" element={<MyReports />} />        
      </Routes>
    </Router>
  );
}
export default App;
