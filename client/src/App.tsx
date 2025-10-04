import React from 'react';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';

import MyReports from './pages/MyReports';
import BugReports from './pages/BugReports';
import FixDocs from './pages/FixDocs';
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
        <Route path="/bugreports" element={<BugReports />} />
        <Route path="/fixdocs" element={<FixDocs />} />        
      </Routes>
    </Router>
  );
}
export default App;
