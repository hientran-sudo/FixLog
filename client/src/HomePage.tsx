import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><span className="Fixlog-title">FixLog</span>
        <br />
        Track. Fix. Document.
        </p>
        <p>
          A developer-centric tool for documenting the step-by-step process of fixing bugs, completing with templates to make this easier and faster
        </p>       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
      
      <main className="App-main">
        <div className="grid-container">
          <section id="home" className="grid-item">
            <h2>My Reports</h2>
            <p>Welcome to dashboash. Click to view reports</p>
            <button
              className="section-button blue"
              onClick={() => navigate('/reports')}
            >
              View
            </button>
          </section>

          <section id="about" className="grid-item">
            <h2>Bug Report</h2>
            <p>Bug reporting details like error message, environment, version, logs, etc
            </p>
            <button className="section-button orange">Create</button>
          </section>

          <section id="contact" className="grid-item">
            <h2>Fix Documentation</h2>
            <p>Document the steps to reproduce the issue, what was tried to fix it, and the result of each attempt</p>
            <button className="section-button green">Create</button>
          </section>
        </div>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 FixLog. All rights reserved.</p>
      </footer>
    </div>
    
  );
}
