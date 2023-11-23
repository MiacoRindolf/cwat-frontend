import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter> {/* Make sure BrowserRouter is used */}
      <div className="App">
        <header className="App-header">
          <h1>Construction Workflow Automation Tool (CWAT)</h1>
        </header>
        <main className="App-content">
          <p>Welcome to CWAT. Your tool for efficient construction project management.</p>
          {/* Additional content will be added here */}
        </main>
        <Routes> {/* Ensure Routes is within BrowserRouter */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Define other routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;