import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/loginPage/Login.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
