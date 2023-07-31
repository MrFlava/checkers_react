import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';


function App() {
  return (
      <div className="wrapper">
        <h1>Application</h1>
        <Router>
          <Routes>
            <Route path="/dashboard" component={<Dashboard />} />
            <Route path="/preferences" component={<Preferences />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;