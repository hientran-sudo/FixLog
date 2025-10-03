import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          FixLog
        </h2>
        <p>
          Track. Fix. Document
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
            <p>Welcome to the homepage. Customize this section as needed.</p>
            <button className="section-button blue">View</button>
          </section>

          <section id="about" className="grid-item">
            <h2>Bug Report</h2>
            <p>This section can include information about your project or yourself.
            </p>
            <button className="section-button orange">Create</button>
          </section>

          <section id="contact" className="grid-item">
            <h2>Fix Documentation</h2>
            <p>Add your contact information or a contact form here.</p>
            <button className="section-button green">Create</button>
          </section>
        </div>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
